/* 
class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.storage = []

    def push(self, x: int) -> None:
        if not self.storage:
            self.storage.append((x, x))
            return None
        new_min = min(x, self.storage[-1][1])
        self.storage.append((x, new_min))
        return None

    def pop(self) -> None:
        self.storage.pop()
        return None

    def top(self) -> int:
        return self.storage[-1][0]

    def getMin(self) -> int:
        return self.storage[-1][1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
 */

class MinStack {
  storage: number[][];
  constructor() {
    this.storage = [];
  }
  push(x: number) {
    if (!this.storage.length) {
      this.storage.push([x, x]);
      return;
    }
    this.storage.push([
      x,
      Math.min(x, this.storage[this.storage.length - 1][1]),
    ]);
    return;
  }
  pop() {
    this.storage.pop();
    return;
  }
  top() {
    return this.storage[this.storage.length - 1][0];
  }
  getMin() {
    return this.storage[this.storage.length - 1][1];
  }
}
