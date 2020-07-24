/* 
class LRUCache(dict):

    def __init__(self, capacity: int):
        self.capacity = capacity
        

    def get(self, key: int) -> int:
        if key not in self:
            return -1
        self[key] = self.pop(key)
        return self[key]

    def put(self, key: int, value: int) -> None:
        if key in self:
            self.pop(key)

        elif len(self) == self.capacity:
            self.pop(next(iter(self)))
            
        self[key] = value

*/

class LRUCache {
  capacity: number;
  storage: Map<any, any>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.storage = new Map();
  }
  get(key: any) {
    if (!this.storage.has(key)) return -1;
    const val = this.storage.get(key);
    this.storage.delete(key);
    this.storage.set(key, val);
    return val;
  }
  put(key: any, val: any) {
    if (this.storage.has(key)) {
      this.storage.delete(key);
    } else if (this.storage.size >= this.capacity) {
      for (let [key, value] of this.storage) {
        this.storage.delete(key);
        break;
      }
    }
    this.storage.set(key, val);
  }
}
