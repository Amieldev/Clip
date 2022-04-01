const say=require('say');
const fs=require('fs');
const text=fs.readFileSync('text.txt','utf-8');

say.export(text,null,1.0,'speech.mp3');