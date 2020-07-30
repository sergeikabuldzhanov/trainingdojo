/* 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

function trap(height: number[]): number {
  let ans = 0;
  if (!height.length) return ans;

  let left = 0;
  let right = height.length - 1;
  let left_max = 0;
  let right_max = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        ans += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        ans += right_max - height[right];
      }
      right--;
    }
  }
  return ans;
}

describe("Trapping water", () => {
  test("Example test case", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
  test("Empty input", () => {
    expect(trap([])).toBe(0);
  });
  test("Staircase", () => {
    expect(trap([0, 1, 2, 3, 4, 5])).toBe(0);
  });
});
