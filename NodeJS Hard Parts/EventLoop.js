/* eslint-disable no-undef */
const fs = require("fs");

function useImportedtweets(errorData, data) {
  const tweets = JSON.parse(data);
  console.log(tweets.tweet1);
}

function immediately() {
  console.log("Run me last !");
}

function printHello() {
  console.log("Hello");
}

function blockFor500ms() {
  // Block JS thread DIRECTLY for 500 ms// With e.g. a for loop with 5m elements
}

// Set's up a timer with 0ms delay
setTimeout(printHello, 0);
// puts printHello into the timer queue

// start reading a file in the background
fs.readFile("./tweets.json", useImportedtweets);
// once reading is done, put useImportedTweets into IO queue

// pushed onto callstack, takes 500ms to execute
blockFor500ms();

console.log("Me first");

// put immediately into check queue
setImmediate(immediately);
// check queue is executed after IO queue is empty

/* 
  OUTPUT ORDER:
  500ms delay
  1. "Me first!" - sync code
  2. "Hello" - timer queue
  3. first tweet - io queue
  4. "Run me last !" - check queue
*/

/* 
  Microtask queue is actually 2 queues:
  1. First one is used exclusively by process.nextTick()
  2. Second one is used by promises
  Microtask queue is check between executing every other queue.
  Check timer queue > check microtask queue > check IO queue > check Microtask queue > ...
*/

/* 
  Close queue:
  Special queue for handling specific 'close' events, i.e. stream.on('close', ()=>null)
*/

/* 
  Queue execution priority:
  1. process.nextTick
  2. microtask queue
  3. timer queue
  4. io queue
  5. check queue
  6. close queue

*/
