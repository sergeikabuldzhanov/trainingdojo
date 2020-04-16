// Generate objects using a function

// More DRY than just using an object literal every time
// con - creates a new copy of increment function every time, memory inefficient
function userCreator(name, score) {
  return {
    name,
    score,
    increment() {
      this.score++;
    },
  };
}

const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
