function printHello() {
  console.log("Hello!");
}

function blockFor1Sec() {
  // blocks the thread for 1000ms
}

setTimeout(printHello, 0); //sets up a timer of 0ms with Browser API
// the printHello invocation is sent to the task queue
// and will be executed only after all the synchronous code is done
// so it's executed 3rd.

blockFor1Sec(); // 1st

console.log("Me first!"); // 2nd
