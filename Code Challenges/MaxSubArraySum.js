/* Given an array of n numbers, our task is to calculate the maximum subarray sum,
 i.e., the largest possible sum of a sequence of consecutive values in the array2. */

// Solution 1. The obvious one.

function SubArraySumQuadratic(arr) {
//   just look at all the subarrays and see which one is bigger
  let best = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let k = i; k <= i; k++) {
        // calc the sum for each subarray
      sum += arr[k];
    }
    best = Math.max(best, sum);
  }
  return best;
}

// Solution 2. The fast one.

function SubArraySumLinear(arr) {
    let best = 0;
    // for a sub array ending at index i, the largest sum 
    // is equal to either arr[i], or largest sum for index i-1 plus arr[i]
    // so we compare those 2 and pick the bigger one.
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        sum = Math.max(arr[i], sum+arr[i]);
        // compare the sum to current best
        best = Math.max(best, sum);
    }
    return best;
}
