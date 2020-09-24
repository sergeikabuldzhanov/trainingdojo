/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  while (n) {
    if (m && nums1[m - 1] >= nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n -= 1;
    }
  }
}

test("Base case", () => {
  const ar1 = [1, 2, 3, 0, 0, 0];
  merge(ar1, 3, [2, 5, 6], 3);
  expect(ar1).toEqual([1, 2, 2, 3, 5, 6]);
});
