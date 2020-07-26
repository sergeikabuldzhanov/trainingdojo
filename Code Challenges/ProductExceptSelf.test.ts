/* 
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        p = 1
        res = []
        # get product of all elements before each index
        for i in range(len(nums)):
            res.append(p)
            p *= nums[i]
        p = 1
        # get product of all elements after the index
        for i in range(len(nums)-1, -1, -1):
            res[i]*=p
            p*=nums[i]
            
        return res
 */

function productExceptSelf(nums: number[]): number[] {
  const ans: number[] = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    ans.push(product);
    product *= nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= product;
    product *= nums[i];
  }

  return ans;
}


describe("Product except self", ()=>{
    test("Basic test case", ()=>{
        expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6])
    })
    test(" handle empty array input ", ()=>{
        expect(productExceptSelf([])).toEqual([])
    })
})