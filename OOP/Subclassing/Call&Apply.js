// There's an another way of executing a fucntion, which allows us to control the assigment of this
const obj = {
  num: 3,
  increment: function () {
    this.num++;
  },
};

const otherObj = {
  num: 10,
};

obj.increment();// obj.num is now 4

obj.increment.call(otherObj);// sets the value of this inside increment function to otherObj for 1 time
// otherObj.num is now 11
// difference between .call and .apply is in how arguments are passed, call takes positional arguments
// apply takes a single array of arguments