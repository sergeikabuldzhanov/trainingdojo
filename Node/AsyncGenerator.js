function doWhenDataRecieved(value) {
  returnNextElement.next(value);
}

function* createFlow() {
  const data = yield fetch("http://twitter.com/will/tweets/1");
  console.log(data);
}

// 1. Create a generator object
const returnNextElement = createFlow();
// 2. Go inside the generator function and yield a promise
const futureData = returnNextElement.next();

// 3. When the promise is fulfilled, pass it's value into generator function through .next(value)
// and continue executing the generator function.
// this allows us to essentially write synchronous code inside the generator function.
futureData.then(doWhenDataRecieved);
