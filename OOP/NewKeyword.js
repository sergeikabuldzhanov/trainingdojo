/* 
    The new keyword automates a lot of things we were doing while using Object.create()
    While used with a function, it automatically creates a new object, sets that objects hidden
    __proto__ property to functions prototype, and applies function to that object
*/

function UserCreator(name, score) {
  // This is essentialythe same as constructor function for ES6 class syntax
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  // prototype property on the function/object combo is used to set the __proto__ hidden property on new objects
  this.score++;
};

const user1 = new UserCreator("Bob", 12);
user1.increment(); // Doesn't find increment on the object itself, so does a lookup in the __proto__, which is equal to UserCreator.prototype(reference)

UserCreator.prototype.decrement = function () {
  // common gotcha with prototype methods is declaring sub functions with function declaration or function expression
  // if we declare them using the function keyword, 'this' inside that sub-method will refer to global object instead
  // so it's better to use arrow functions, as 'this' for arrow functions is lexically scoped, i.e. is equal to this
  // in the enclosing scope
  function substract() {
    this.score--; // this will refer to global object, BUG
  }
  substract(); // will try to access window.score and decrement it
  // instead we could either do
  const that = this; // set cosntant that to the value of 'this', which is the object at hand
  function sub() {
    that.score--;
  }
  sub(); // will work, but may be confusing, was a standart practice back in the day
  // or use an arrow function
  const decr = () => this.score--;
  decr(); // works as intended, no extra effort needed.
};
