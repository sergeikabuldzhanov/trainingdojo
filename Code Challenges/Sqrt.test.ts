/* class Solution:
    def mySqrt(self, x: int) -> int:
            # Assuming the sqrt of n as n only  
        r = x
        while r*r > x:
            r = (r + x//r)//2
        return r */

function mySqrt(x: number): number {
  let r = x;
  while (r * r > x) {
    r = Math.floor((r + Math.floor(x / r)) / 2);
  }
  return r;
}

test("2", () => {
  expect(mySqrt(2)).toBe(1);
});
test("5", () => {
  expect(mySqrt(5)).toBe(2);
});
test("9", () => {
  expect(mySqrt(9)).toBe(3);
});
