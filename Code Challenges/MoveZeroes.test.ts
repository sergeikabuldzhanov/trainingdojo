/* 
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        lastNonZeroIndex = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[lastNonZeroIndex], nums[i] = nums[i], nums[lastNonZeroIndex]
                lastNonZeroIndex += 1
        return nums
*/
function moveZeroes(nums: number[]) {
  let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[lastNonZeroIndex];
      nums[lastNonZeroIndex] = temp;
      lastNonZeroIndex++;
    }
  }
  return nums;
}
