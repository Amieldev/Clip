const videoshow=require('videoshow');
const fs=require('fs');
const {Speech}=require('./functions/speech');
const {Img}=require('./functions/img');
const {Download}=require('./functions/download');

const text=fs.readFileSync('text.txt','utf-8');

function Render(audio,output){
const imgs=fs.readdirSync('./imgs').map(img=>{
  return('./imgs/'+img);
})

const videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
  }
   
  videoshow(imgs, videoOptions)
    .audio(audio)
    .save('./out'+output)
    .on('start', function (command) {
      console.log('ffmpeg process started:', command)
    })
    .on('error', function (err, stdout, stderr) {
      console.error('Error:', err)
      console.error('ffmpeg stderr:', stderr)
    })
    .on('end', function (output) {
      console.error('Video created in:', output)
    });
}

// Speech(text,'speech.mp3');

Render('speech.mp3','addis.mp4')