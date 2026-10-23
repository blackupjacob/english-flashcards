import os
HERE=os.path.dirname(os.path.abspath(__file__)); REPO=os.path.dirname(HERE)
import json, sys, os, subprocess, wave, io
import numpy as np, soundfile as sf

def cyrb53(s, seed=0):
    # same algorithm implemented in index.html (UTF-16 code units)
    M32 = 0xFFFFFFFF
    h1 = 0xdeadbeef ^ seed; h2 = 0x41c6ce57 ^ seed
    def imul(a, b): return (a * b) & M32
    for ch in s.encode('utf-16-le')[::1] and [int.from_bytes(s.encode('utf-16-le')[i:i+2],'little') for i in range(0, len(s.encode('utf-16-le')), 2)]:
        h1 = imul(h1 ^ ch, 2654435761); h2 = imul(h2 ^ ch, 1597334677)
    h1 = imul(h1 ^ (h1 >> 16), 2246822507); h1 ^= imul(h2 ^ (h2 >> 13), 3266489909)
    h2 = imul(h2 ^ (h2 >> 16), 2246822507); h2 ^= imul(h1 ^ (h1 >> 13), 3266489909)
    h1 &= M32; h2 &= M32
    return (2097151 & h2) * 4294967296 + h1  # 53-bit

def key(text, voice, slow):
    return format(cyrb53(f"{voice}|{'s' if slow else 'n'}|{text}"), 'x')

def to_mp3(samples, sr, path):
    p = subprocess.run(["ffmpeg","-y","-loglevel","error","-f","f32le","-ar",str(sr),"-ac","1","-i","-",
                        "-af","loudnorm=I=-18:TP=-2:LRA=11,apad=pad_dur=0.12","-ac","1","-ar","24000","-c:a","libmp3lame","-b:a","40k",path],
                       input=samples.astype(np.float32).tobytes(), check=True)

if __name__ == "__main__":
    app = sys.argv[1]
    out = os.path.join(REPO,"audio")
    os.makedirs(out, exist_ok=True)
    cards = json.load(open(os.path.join(HERE,f"{app}_cards.json")))["cards"]
    manifest = {}
    if app == "english":
        from kokoro_onnx import Kokoro
        k = Kokoro(os.path.join(HERE,"models/kokoro-v1.0.onnx"), os.path.join(HERE,"models/voices-v1.0.bin"))
        plan = [("casualUS","us","af_heart","en-us"),("formalEn","us","af_heart","en-us"),("casualUK","uk","bf_emma","en-gb")]
        only = sys.argv[2] if len(sys.argv) > 2 else None
        for reg, vid, kv, lang in plan:
            if only and reg != only: continue
            for c in cards:
                t = c[reg]
                for slow in (False, True):
                    kk = key(t, vid, slow); fn = f"{kk}.mp3"
                    if kk in manifest: continue
                    if os.path.exists(f"{out}/{fn}") and os.path.getsize(f"{out}/{fn}") > 1000:
                        manifest[kk] = {"v": vid, "t": t, "slow": slow}; continue
                    s, sr = k.create(t, voice=kv, speed=0.8 if slow else 1.0, lang=lang)
                    to_mp3(s, sr, f"{out}/{fn}"); manifest[kk] = {"v": vid, "t": t, "slow": slow}
    else:
        from piper import PiperVoice, SynthesisConfig
        from kokoro_onnx import Kokoro
        only = sys.argv[2] if len(sys.argv) > 2 else None
        k = Kokoro(os.path.join(HERE,"models/kokoro-v1.0.onnx"), os.path.join(HERE,"models/voices-v1.0.bin"))
        voices = {"mx": os.path.join(HERE,"models/es_MX-claude-high.onnx")}
        loaded = {v: PiperVoice.load(p) for v, p in voices.items()}
        # 스페인(es-ES) 문장은 Kokoro em_alex(lang=es), 중남미(es-MX)는 Piper claude. id "ea" = 파일 이름 충돌 방지용
        plan = [("colloquialSpain","ea"),("formalSpain","ea"),("colloquialLatAm","mx")]
        for reg, vid in plan:
            if only and reg != only: continue
            for c in cards:
                t = c[reg]
                for slow in (False, True):
                    kk = key(t, vid, slow)
                    if kk in manifest: continue
                    if os.path.exists(f"{out}/{kk}.mp3") and os.path.getsize(f"{out}/{kk}.mp3") > 1000:
                        manifest[kk] = {"v": vid, "t": t, "slow": slow}; continue
                    if vid == "ea":
                        s, sr = k.create(t, voice="em_alex", speed=0.8 if slow else 1.0, lang="es")
                        to_mp3(s, sr, f"{out}/{kk}.mp3"); manifest[kk] = {"v": vid, "t": t, "slow": slow}; continue
                    pv = loaded[vid]
                    cfg = SynthesisConfig(length_scale=1.0/0.8 if slow else 1.0)
                    parts = [ch.audio_float_array for ch in pv.synthesize(t, syn_config=cfg)]
                    s = np.concatenate(parts); sr = pv.config.sample_rate
                    to_mp3(s, sr, f"{out}/{kk}.mp3"); manifest[kk] = {"v": vid, "t": t, "slow": slow}
    json.dump(manifest, open(f"{app}_manifest_full{('_'+sys.argv[2]) if len(sys.argv)>2 else ''}.json","w"), ensure_ascii=False)
    print(app, len(manifest), "files")
