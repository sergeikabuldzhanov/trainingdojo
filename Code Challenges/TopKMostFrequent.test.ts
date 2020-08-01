/* 
Given a non-empty array of integers, return the k most frequent elements.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Note:
    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
    It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
    You can return the answer in any order.
*/

function topKFrequent(nums: number[], k: number): number[] {
  const buckets: number[][] = [];
  while (buckets.push([]) < nums.length);
  const frequencies: { [key: number]: number } = {};
  for (let num of nums) {
    if (frequencies[num]) {
      frequencies[num] += 1;
    } else {
      frequencies[num] = 1;
    }
  }
  for (let [value, fr] of Object.entries(frequencies)) {
    buckets[fr].push(+value);
  }
  const flat = buckets.reduce((acc, e, i) => acc.concat(e), []);
  return flat.slice(flat.length - k);
}

describe("", () => {
  test("", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([2, 1]);
  });
});
