import fs from "fs";

function cleanTweets(tweetsToClean) {
  // remove bad tweets
  console.log(tweetsToClean);
}

function useImportedTweets(error, tweet) {
  const cleanTweetJSON = cleanTweets(tweet);
  const tweetsObj = JSON.parse(cleanTweetJSON);
  console.log(tweetsObj.tweet2);
}

fs.readFile("./tweets.json", useImportedTweets);
