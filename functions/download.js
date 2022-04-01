const Downloader=require('nodejs-file-downloader');


async function Download(img){
    //Wrapping the code with an async function, just for the sake of example.
  
    const downloader = new Downloader({
      url: img,
       //If the file name already exists, a new file with the name 200MB1.zip is created.
      directory: "./images", //This folder will be created, if it doesn't exist.
    });
    try {
      await downloader.download(); //Downloader.download() returns a promise.
  
      console.log("All done");
    } catch (error) {
      //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
      //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
      console.log("Download failed", error);
    }
  };



// (async () => {
//     //Wrapping the code with an async function, just for the sake of example.
  
//     const downloader = new Downloader({
//       url: "https://i.ytimg.com/vi/7W5qkFhE_Sk/maxresdefault.jpg", //If the file name already exists, a new file with the name 200MB1.zip is created.
//       directory: "./image", //This folder will be created, if it doesn't exist.
//     });
//     try {
//       await downloader.download(); //Downloader.download() returns a promise.
  
//       console.log("All done");
//     } catch (error) {
//       //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
//       //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
//       console.log("Download failed", error);
//     }
//   })();

module.exports={
  Download
}