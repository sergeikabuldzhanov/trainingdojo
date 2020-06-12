// parent class
const userPrototype = {
  sayName: function () {
    console.log(this.name, this.score);
  },
  increment: function () {
    this.score++;
  },
};

function userCreator(name, score) {
  const newUser = Object.create(userPrototype);

  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const user = userCreator('Bob', 100);
user.sayName();

// now Implement inheritance by manually creating the prototype chain
// Subclass
const paidUserPrototype = {
  increaseBalance: function () {
    this.balance++;
  },
};
// Here we manually implement the prototype chain from paidUserPrototype to userPrototype
Object.setPrototypeOf(paidUserPrototype, userPrototype);

function paidUserCreator(name, score, balance) {
  const newPaidUser = userCreator(name, score);

  Object.setPrototypeOf(newPaidUser, paidUserPrototype);

  newPaidUser.balance = balance;

  return newPaidUser;
}

const paidUser = paidUserCreator('Jane', 900, 10000);

paidUser.sayName();
paidUser.increaseBalance()
console.log(paidUser.balance)