/* 
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

 */

function maxProfit(prices: number[]): number {
  // The bruteforce approach is just to find the biggest delta for every point in the array, O(n^2)
  // The more efficient approach would be single pass
  // we are only ever interested to find the lowest value followed by the highest value
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) minPrice = prices[i];
    if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }
  return maxProfit;
}

describe("maxProfit", () => {
  test("Example test case", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  test("Zero profit test case", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
  test("Multiple peak  valleys", () => {
    expect(maxProfit([10, 90, 0, 81, 1])).toBe(81);
  });
});
