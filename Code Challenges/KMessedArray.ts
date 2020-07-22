function sortKMessedArray(arr: any[], k: number): any[] {
  // your code goes here
  if (k === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    const upperBoundary = i + k < arr.length ? i + k : arr.length - 1;
    for (let j = i; j <= upperBoundary; j++) {
      //find the smallest element and put it  at lower boundary
      //essentially an insertion sort
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}
