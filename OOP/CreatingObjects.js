/* 
Ways to create objects:
*/

// 1. Object literal
const user1 = {
  name: "dave",
  score: 5,
  increment: function () {
    user1.score++;
  },
};
user1.increment(); // user1.score = 6

// 2. Dot notation
const user2 = {}; // create a const named user2 equal to an empty object
user2.name = "Julia"; // create properties on user2 using dot notation
user2.score = 1;
user2.increment = function () {
  user2.score++;
};

// 3. Object.create()

const user3 = Object.create(null) // creates an object with __proto__ set to null
user3.name = "Julia"; // create properties on user3 using dot notation
user3.score = 1;
user3.increment = function () {
  user3.score++;
};