function merge(intervals: number[][]): number[][] {
  const ans: number[][] = [];
  if (!intervals.length) return ans;

  intervals.sort((prev, cur) => prev[0] - cur[0]);
  let cur = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= cur[1]) {
      cur[1] = Math.max(cur[1], interval[1]);
    } else {
      ans.push(cur);
      cur = interval;
    }
  }
  ans.push(cur);
  return ans;
}

test("Base", () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});

test("Empty", () => {
  expect(merge([])).toEqual([]);
});
