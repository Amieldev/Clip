const express=require('express');
const fs=require('fs');
const {Download}=require('./functions/download');
const {Img}=require('./functions/img');
const {Speech}=require('./functions/speech');
const {Video}=require('./functions/video');

const app=express();
const port=5000;

app.use(express.json());
app.use(express.static('web'));

app.get('/',(req,res)=>{

});

app.get('/img',async(req,res)=>{
    const title=req.query.title;
    Img(title);
    const links=JSON.parse(fs.readFileSync('links.json','utf-8'));
    links.forEach(link=>{
        if(links.indexOf(link)<20){
            Download(link);
        }
    })

    res.send('Download Complete');

});

app.get('/speech',async(req,res)=>{
    const text=req.query.text;
    await Speech(text,'speech.mp3');
    
    res.send('Speech generation complete.')

});

app.get('/video',async(req,res)=>{
    await Video('speech.mp3','video.mp4');
    res.send('Video rendered!');
})

app.listen(port,()=>console.log(`Listening at http://localhost:${port}`));

// async function main(){
//     await Speech(fs.readFileSync('text.txt','utf-8'),'music.mp3');
//     await Img('ps5');
//     const links=await JSON.parse(fs.readFileSync('links.json','utf-8'));
//     await links.forEach(link=>{
//         if(links.indexOf(link)<20){
//             Download(link);
//         }
//     });

//     await Video('music.mp3','video.mp4');
// }

// main();