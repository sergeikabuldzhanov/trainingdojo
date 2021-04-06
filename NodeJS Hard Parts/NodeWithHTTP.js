import http from "http";
const tweets = ["Hi", "!", "Hello", "", "#"];
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
  const tweetNeeded = incomingData.url.slice(8);
  functionsToSetOutgoingData.end(tweets[tweetNeeded]);
}
const server = http.createServer(doOnIncoming);
server.listen(80);
