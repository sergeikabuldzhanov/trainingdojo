/* 
class Solution:
    def countNumbersWithUniqueDigits(self, n: int) -> int:
        # n = 1
        # 0 10
        # 0 1 2 3 4 5 6 7 8 9
        # n = 2
        # 10 12 13 14 ... 21 23 24 25 ... 98
        # n = 3
        # 102 103 104 ... 109 120 ...
        # We have to figure out HOW MANY such numbers are there, NOT GENERATE ALL THE NUMBERS
        # the total number of digits is limited to 10
        # the digits within our numbers must be unique
        if n == 0:
            return 1 # just 1 unqiue number - 0
        # 1 2 4 5 ... we can generate 9 unique numbers from 0
        # 10 12 13 ... we can generate 9 unique numbers from 1
        # 102 103 ... we can generate 8 unique numbers from 10
        # 1023 1024 1025 ... we can generate 7 unique numbers from 102
        # ...
        if n == 1:
            return 10
        total = 10
        prev = 9
        for i in range(1, n):
            new = prev * (10 - i)
            total += new
            prev = new
        return total
*/

function countNumbersWithUniqueDigits(n: number): number {
  if (n === 0) return 1;
  if (n === 1) return 10;

  let total = 10;
  let prev = 9;
  for (let i = 1; i < n; i++) {
    let next = prev * (10 - i);
    total += next;
    prev = next;
  }
  return total;
}

test("0", () => {
  expect(countNumbersWithUniqueDigits(0)).toBe(1);
});
test("1", () => {
  expect(countNumbersWithUniqueDigits(0)).toBe(10);
});
test("8", () => {
  expect(countNumbersWithUniqueDigits(0)).toBe(2345851);
});
