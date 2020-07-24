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
  /**
   * @remarks returns value associated with that key, if there's no entry with that key returns -1
   * @param key key for the value to be retrieved
   */
  get(key: any) {
    if (!this.storage.has(key)) return -1;
    const val = this.storage.get(key);
    this.storage.delete(key);
    this.storage.set(key, val);
    return val;
  }
  /**
   * @remarks
   * Adds key:value pair to the cache, if cache is at max capacity the oldest entry is evicted
   * @param key: value to be used as key, objects, functions, and all the primitives can be used as keys
   * @param val: value assigned to that key
   */
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

describe("LRUCache", () => {
  test("Adding items from zero to limit", () => {
    //setup
    const cache = new LRUCache(2);
    cache.put(1, "A");
    expect(cache.get(1)).toBe("A");
    cache.put(2, "B");
    expect(cache.get(2)).toBe("B");
    cache.put(3, "C");
    expect(cache.get(3)).toBe("C");
    expect(cache.get(1)).toBe(-1);
  });
});
