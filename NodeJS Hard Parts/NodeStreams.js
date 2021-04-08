import fs from "fs";

let cleanedTweets = "";

const cleanTweets = (tweet) =>
  tweet
    .split("")
    .filter((char) => char !== "A")
    .join("");
/* 
1. Acess the node c++ feature reponsible for talking with the file system
2. Node sets up the interaction and returns back a JS object containing methods used to control the filesystem
3. Use the tweetStream.on method to pass in a function which will be auto-called by node every time it has read a chunk of data 
*/
const tweetStream = fs.createReadStream("./tweets");

tweetStream.on("data", (data) => {
  cleanedTweets += cleanTweets(data);
});

console.log(cleanedTweets);
