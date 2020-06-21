// iterators have to conform to following:
// 1. return an object
// 2. Have a method called next which takes no arguments
// 3. next() should return an object in shape of {value: 1, done: false}

// the for..of operator accesses the object method at arr[Symbol.iterator]

class Range {
  constructor(end) {
    this.end = end;
  }
  *[Symbol.iterator]() {
    let i = 0;
    while (i < this.end) {
      yield i;
      i++;
    }
  }
}

for(let num of new Range(9)){
    console.log(num);
}