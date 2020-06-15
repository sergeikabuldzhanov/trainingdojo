// New keyword creates an empty object, passes it as the value of this
// and assigns userCreator.prototype as __proto__ of this new object.
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.sayName = function () {
  console.log(this.name);
};

userCreator.prototype.increment = function () {
  this.score++;
};

const user1 = new userCreator("Phil", 5);
const user2 = new userCreator("Tim", 4);

user1.sayName();

function paidUserCreator(name, score, balance) {
  // use the existing user creator to not to copy code
  // by passing the local this to userCreator.call
  userCreator.call(this, name, score);
  this.balance = balance;
}

// Setup the inheritance by setting paidUserCreator.__proto__ to userCreator.prototype
paidUserCreator.prototype = Object.create(userCreator.prototype);

// Add the paidUser specific methods, since they are added directly to
// the paidUserCreator.prototype, they will be only accessible to paidUser and it's subclasses
paidUserCreator.prototype.increment_balance = function () {
  this.balance++;
};

const user3 = new paidUserCreator("Bob", 8, 25);

user3.increment_balance(); //25
user3.sayName(); // "Bob"
