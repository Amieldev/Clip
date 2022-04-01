require('dotenv').config();
const apikey=process.env.APIKEY;
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(apikey);
const fs=require('fs');

function Img(title){

const params = {
  engine: "google",
  q:title,
  location: "Austin, Texas, United States",
  google_domain: "google.com",
  gl: "us",
  hl: "en",
  tbm: "isch"
};

const callback = function(data) {
  const list=data.images_results;
  const links=[];
  list.forEach(img=> {
    links.push(img.original);
  });
  console.log(links);
  fs.writeFileSync('links.json',JSON.stringify(links));
};

// Show result as JSON
search.json(params, callback);

}

module.exports={
  Img
}