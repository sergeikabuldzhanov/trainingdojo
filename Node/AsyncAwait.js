// 1. async function declaration
async function createFlow() {
  // 3. go inside async function
  console.log("Me first!"); // 4. Me first!
  // 5. queue async interaction to microtask queue and continue executing synchronous code outside createFlow();
  const data = await fetch("twitter url"); //8. after the async stuff is resolved, assign data it's value
  // and continue execition of createFlow()
  console.log(data);
}
// 2. calling the async function
createFlow();

console.log("Me second!"); //6. Me second!
// 7. check that there's no more synchronous code to execute
