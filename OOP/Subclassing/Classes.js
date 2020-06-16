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

const user1 = new User("Bob", 10);
const user2 = new User("Paul", 20);

user1.sayName();

class PaidUser extends User {
  constructor(name, score, balance) {
    // super calls the parent class constructor function and sets the PaidUser.prototype.__proto__
    //   to User.prototype
    super(name, score);
    this.balance = balance;
  }
  increaseBalance() {
    this.balance++;
  }
}

const paid1 = new PaidUser("Alice", 22, 1000);

paid1.increaseBalance();// 1001
