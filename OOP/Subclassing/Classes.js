class User {
    // constructor function is used the same way as userCreator from prev examples
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
//   methods are appended to User.prototype
  sayName() {
    console.log(this.name);
  }
  increment() {
    this.score++;
  }
}

const user1 = new User('Bob', 10);
const user2 = new User('Paul', 20);