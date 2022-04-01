const videoshow = require('videoshow');
const fs=require('fs');

function Video(audio,output){
    const images=fs.readdirSync('./images').map(i=>{
        return ('./images/'+i)
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
     
    videoshow(images, videoOptions)
      .audio(audio)
      .save(output)
      .on('start', function (command) {
        console.log('ffmpeg process started:', command)
      })
      .on('error', function (err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
      })
      .on('end', function (output) {
        console.error('Video created in:', output)
      })
};

module.exports={
    Video
}