/* Given an array, we define its value to be the value obtained by following these instructions:
    Write down all pairs of numbers from this array.
    Compute the product of each pair.
    Find the sum of all the products.
For example, for a given array
Pairs 	(7, 2), (7, -1), (7, 2), (2, -1), (2, 2), (-1, 2)
Products of the pairs 	14, -7, 14, -2, 4, -2
Sum of the products 	14 + (-7) + 14 + (-2) + 4 + (-2) =
Note that is listed twice, one for each occurrence of

.

Given an array of integers, find the largest value of any of its nonempty subarrays.

Note: A subarray is a contiguous subsequence of the array.

Complete the function largestValue which takes an array and returns an integer denoting the largest value of any of the array's nonempty subarrays.  */

function PairSums(arr: Array<number>) {
  // For an array of 2 elements the value is equal to product.
  let best: Array<number> = [arr[0] * arr[1], arr[0] + arr[1], 0]; // total value, sum of elements of subarray, starting index of subarray
  let prev = best;
  for (let i = 2; i < arr.length; i++) {
    let local_value: number = arr[i] * arr[i - 1];
    let accumulated_value: number = prev[1] * arr[i] + prev[0];
    let current;
    if (local_value > accumulated_value) {
      current = [local_value, arr[i] + arr[i - 1], i - 1];
    } else {
      current = [accumulated_value, prev[1] + arr[i]];
    }
    if (best[0] < current[0]) best = current;
    prev = current;
  }
  return best[0];
}
