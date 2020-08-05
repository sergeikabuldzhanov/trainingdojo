/* 
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        ans = []
        if not intervals: return ans
        intervals.sort(key = lambda x: x[0])
        cur = intervals[0]
        for interval in intervals:
            if interval[0] <= cur[1]:
                cur[1] = max(cur[1], interval[1])
            else:
                ans.append(cur)
                cur = interval
        ans.append(cur)
        return ans
 */

function mergeIntervals(intervals: number[][]) {
  const ans: number[][] = [];
  if (!intervals.length) return ans;

  intervals.sort((prev, cur) => prev[0] - cur[0]);
  let cur = intervals[0];
  for (let interval of intervals) {
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

describe("merge intervals", () => {
  test("empty input", () => {
    expect(mergeIntervals([])).toEqual([]);
  });
  test("Example test case", () => {
    expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
  });
});
