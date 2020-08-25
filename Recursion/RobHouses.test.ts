const meme: { [key: number]: number } = {};
function rob(nums: number[], i: number = 0): number {
  if (i >= nums.length) return 0;
  if (i in meme) return meme[i];
  meme[i] = Math.max(nums[i] + rob(nums, i + 2), rob(nums, i + 1));
  return meme[i];
}
