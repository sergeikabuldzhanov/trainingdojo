// Require the http module
import http from "http";

// Set up our tweets
const tweets = ["Hi", "!", "Hello", "", "#"];

// Declare the request handler
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
  const tweetNeeded = incomingData.url.slice(8);
  functionsToSetOutgoingData.end(tweets[tweetNeeded]);
}

/* 
 Set up the server, which includes
 1. Call the http.createServer function with doOnIncoming as it's argument
 2. http.createServer is a label for node feature responsible for setting up all of the OS level stuff necessary for networking
 3. doOnIncoming function will be called by node every time a message comes through a port specified in server.listen
 4. Node will parse the message and pass the parsed message as the first argument of doOnIncoming
 5. Node will pass a special object containing functions used to create a response to the message as the second argument of doOnIncoming
 6. http.createServer() returns a js object containing methods which allow us to inspect and control the server.
 */
const server = http.createServer(doOnIncoming);
server.listen(80);
