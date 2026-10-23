import json, sys, os
from gen import key, HERE, REPO
from phonemizer.backend import EspeakBackend
import espeakng_loader
from phonemizer.backend.espeak.wrapper import EspeakWrapper
EspeakWrapper.set_library(espeakng_loader.get_library_path())
EspeakWrapper.set_data_path(espeakng_loader.get_data_path())

CFG = {
 "english": {"regs": {"casualUS": ("en-US","us","en-us"), "formalEn": ("en-US","us","en-us"), "casualUK": ("en-GB","uk","en-gb")}},
 "spanish": {"regs": {"colloquialSpain": ("es-ES","ea","es"), "formalSpain": ("es-ES","ea","es"), "colloquialLatAm": ("es-MX","mx","es-419")}},
}
app = sys.argv[1]
cards = json.load(open(os.path.join(HERE,f"{app}_cards.json")))["cards"]
audio_dir = os.path.join(REPO,"audio")
backs = {}
audio, ipa, missing = [], {}, []
wipa = {}
import re
def wnorm(w): return re.sub(r"^[^\w']+|[^\w']+$", "", w.lower().replace('’', "'"))
for reg, (lang, vid, esp) in CFG[app]["regs"].items():
    be = backs.setdefault(esp, EspeakBackend(esp, preserve_punctuation=True, with_stress=True))
    texts = sorted({c[reg] for c in cards})
    outs = be.phonemize(texts)
    for t, o in zip(texts, outs):
        words = o.split()
        for tok in t.split():
            wn = wnorm(tok)
            if wn and f"{lang}|{wn}" not in wipa: wipa[f"{lang}|{wn}"] = None
        ipa[f"{lang}|{t}"] = words
        for slow in (False, True):
            h = key(t, vid, slow)
            if os.path.exists(f"{audio_dir}/{h}.mp3"): audio.append(h)
            else: missing.append((reg, slow, t))
audio = sorted(set(audio))
for (lang, vid, esp) in {v[0]: v for v in CFG[app]["regs"].values()}.values():
    ks = [k for k in wipa if k.startswith(lang + "|")]
    outs = backs[esp].phonemize([k.split("|",1)[1] for k in ks])
    for k, o in zip(ks, outs): wipa[k] = o.strip()
wipa = {k: v for k, v in wipa.items() if v}
ok = sum(1 for k, w in ipa.items() if len(w) == len(k.split("|", 1)[1].split()))
print(app, "audio", len(audio), "missing", len(missing), "ipa", len(ipa), "word-aligned", ok)
js = "/* 자동 생성 파일 — tts-build/build_data.py · 발음 음원 목록(audio)과 eSpeak NG 발음기호(ipa) */\nwindow.TTS_DATA = " + json.dumps({"audio": audio, "ipa": ipa, "wipa": wipa}, ensure_ascii=False, separators=(",", ":")) + ";\n"
open(f"{audio_dir}/audio-data.js", "w").write(js)
print(len(js), "bytes", "wipa", len(wipa))
