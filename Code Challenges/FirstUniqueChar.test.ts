/* 
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

class Solution:
    def firstUniqChar(self, s: str) -> int:
        counter = [None for i in range(128)]
        # iterate thorugh the string
        for index, char in enumerate(s):
            if not counter[ord(char)]:
                counter[ord(char)] = [1, index]
            else:
                counter[ord(char)][0] += 1
        min_index = float('inf')
        for i in range(128):
            if counter[i] and counter[i][0] == 1 and counter[i][1] <= min_index:
                min_index = counter[i][1]
        if min_index < float('inf'):
            return min_index
        return -1

*/
var firstUniqChar = function (s: string): number {
  const charCount: { [key: string]: number[] } = {};
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]]) {
      charCount[s[i]].push(i);
    } else {
      charCount[s[i]] = [i];
    }
  }
  const kvPairs = Object.entries(charCount);
  for (let i = 0; i < kvPairs.length; i++) {
    if (kvPairs[i][1].length === 1) return kvPairs[i][1][0];
  }
  return -1;
};

describe("First Unique character", () => {
  test("Case 1", () => {
    expect(firstUniqChar("leetcode")).toBe(0);
  });
  test("Case 2", () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });
  test("No unique chars", () => {
    expect(firstUniqChar("aabbcc")).toBe(-1);
  });
});
