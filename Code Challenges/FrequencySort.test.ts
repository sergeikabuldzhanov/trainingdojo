/* 
from collections import defaultdict
class Solution:
    def frequencySort(self, s: str) -> str:
        frequency_table = defaultdict(int)
        for char in s:
            frequency_table[char] += 1
        
        ans = ""
        for char, count in sorted(frequency_table.items(), key=lambda x: x[1], reverse=True):
            ans+=char*count
        return ans
*/

function frequencySort(str: string) {
  const frequency_table: { [key: string]: number } = {};
  for (let char of str) {
    if (char in frequency_table) {
      frequency_table[char] += 1;
    } else {
      frequency_table[char] = 1;
    }
  }

  let ans = "";
  for (let [char, count] of Object.entries(frequency_table).sort(
    (a, b) => b[1] - a[1]
  )) {
    ans += char.repeat(count);
  }
  return ans;
}

describe("FrequencySort", () => {
    test("Empty string", () => {
        expect(frequencySort("")).toBe("");
    });
    test("Sorts a single word", () => {
        expect(frequencySort("abracadabra")).toBe("aaaaabbrrcd");
    });
});
