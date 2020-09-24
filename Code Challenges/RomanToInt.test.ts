/* 
class Solution:
    def romanToInt(self, s: str) -> int:
        numMap = {
            "I":1,
            "IV":4,
            "V":5,
            "IX":9,
            "X":10,
            "XL":40,
            "L":50,
            "XC":90,
            "C":100,
            "CD":400,
            "D":500,
            "CM":900,
            "M":1000
        }
        result = 0;
        i = 0
        while i < len(s):
            if s[i:i+2] in numMap:
                result += numMap[s[i:i+2]]
                i+=2
            else:
                result += numMap[s[i]]
                i+=1
        return result
*/

function romanToInt(s: string): number {
  const numMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  let prev = "M";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const value = numMap[char];
    if (numMap[prev] < value) res -= 2 * numMap[prev];
    res += value;
    prev = char;
  }
  return res;
}

test("Works as expected", () => {
  expect(romanToInt("VIII")).toBe(8);
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("")).toBe(0);
  expect(romanToInt("XCIX")).toBe(99);
});
