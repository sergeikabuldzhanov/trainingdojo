function removeElement(nums: number[], val: number): number {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    if (nums[l] === val) {
      nums[l] = nums[r - 1];
      r -= 1;
    } else {
      l += 1;
    }
  }
  return r;
}

test("Base", () => {
  const arr = [3, 2, 2, 3];
  expect(removeElement(arr, 3)).toBe(2);
  expect(arr.slice(0, 2)).toEqual([2, 2]);
});
