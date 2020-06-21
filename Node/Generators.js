// A look at how generator functions work
// Generator functions are created by adding "*" to function keyword
// like this: function*
function* createFlow() { //1. create a generator function named createFlow
    // 3.enter the execution of createFlow
  const num = 10; // 4. declare const num
  // the yield expression evaluates to whatever is passed to the generator.next(1) method
  const newNum = yield num;
  // const [var] = yield [var2] is executed in the following order:
  // 1. When yield is first encountered, execution is stopped and [var2] returned from invocation of .next()
  // 2. at this time const [var1] remains uninitialized
  // 3. the whole righthand expression of yield [var2] is evaluated to whatever is passed to the next invocation of .next()
  // 4. const [var] is assigned that value, and function continues to execute until next yield is met
  // 5. At this point whatever is to the right of that yield is evaluated and returned, execution is paused
  // 6. Rinse and repeat
  yield 5 + newNum;
  yield 6;
}

const returnNextElement = createFlow(); // 2.invoke the generator function and create a generator object with .next method on it.
const element1 = returnNextElement.next(); // 10
const element2 = returnNextElement.next(2); // 5 + 2 = 7
const element3 = returnNextElement.next(2); // 6