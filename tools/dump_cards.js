const fs=require('fs');
for (const app of [process.argv[2]]) {
  const src=fs.readFileSync(require('path').join(__dirname,'..','cards.js'),'utf8');
  const w={}; new Function('window',src)(w);
  fs.writeFileSync(require('path').join(__dirname,`${app}_cards.json`),JSON.stringify({topics:w.TOPICS,cards:w.FLASHCARDS}));
  console.log(app,w.FLASHCARDS.length,Object.keys(w.FLASHCARDS[0]));
}
