/**
 * @param {number[]} nums
 * @return {number[][]}
 class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        output = []
        
        for i in range(2**n, 2**(n + 1)):
            # generate bitmask, from 0..00 to 1..11
            bitmask = bin(i)[3:]
            
            # append subset corresponding to that bitmask
            output.append([nums[j] for j, char in enumerate(bitmask) if char == '1'])
        
        return output
 */
var subsets = function (nums) {
  const n = nums.length;
  const output = [];
  for (let i = 0; i < 2 ** n; i++) {
    const bitmask = i.toString(2);
    const combination = [];
    for (let j = bitmask.length - 1; j >= 0; j--) {
      if (bitmask[j] === "1") {
        combination.push(nums[j]);
      }
    }
    output.push(combination);
  }
  return output;
};
