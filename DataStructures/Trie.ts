interface TrieRoot {
  [key: string]: any;
}

class Trie {
  root: TrieRoot;
  constructor() {
    this.root = {};
  }

  insert(word: string): void {
    let cur = this.root;
    for (let char of word) {
      if (!(char in cur)) cur[char] = { WORD: false };
      cur = cur[char];
    }
    cur.WORD = true;
  }

  search(word: string): boolean {
    let cur = this.root;
    for (let char of word) {
      if (!(char in cur)) return false;
      cur = cur[char];
    }
    return cur.WORD;
  }

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (let char of prefix) {
      if (!(char in cur)) return false;
      cur = cur[char];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
