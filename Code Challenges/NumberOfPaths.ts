function numOfPathsToDest(n: number): number {
  //    solution using catalan numbers formula
  // (2n)!/n!(n+1)!
  if (n === 1) return 1;
  const m = n - 1;
  let k2: number,
    k: number = 0,
    k1: number = 0;
  let cur = 1;
  for (let i = 1; i <= 2 * m; i++) {
    cur *= i;
    if (i === m) k = cur;
    if (i === m + 1) k1 = cur;
  }
  k2 = cur;
  return k2 / (k * k1);
}

function numberOfPathsQuadratic(n: number): number {
  // generate the first row which is [1] * n
  // generate the second row where r[i] is equal to r[i-1]+pr[i+1]

  let prevRow: number[] = new Array(n).fill(1);
  let currentRow: number[];
  for (let i = 1; i < n; i++) {
    currentRow = new Array(n - i);
    currentRow[0] = prevRow[1];
    for (let j = 1; j < n - i; j++) {
      currentRow[j] = currentRow[j - 1] + prevRow[j + 1];
    }
    //console.log(currentRow, prevRow)
    prevRow = currentRow;
  }
  return prevRow[0];
}
