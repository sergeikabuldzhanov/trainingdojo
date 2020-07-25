/**
 * Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 * Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
 * ```python
 * def dailyTemperatures(self, T: List[int]) -> List[int]:
 *      output = [0 for t in T]
 *      stack = []
 *
 *      if len(T) == 0:
 *            return output
 *
 *      for index, temp in enumerate(T):
 *          while stack and stack[-1][1]<temp:
 *              prev_index, prev_temp = stack.pop()
 *              output[prev_index] = index - prev_index
 *          stack.append((index, temp))
 *      return output
 * ```
 */
function dailyTemperatures(T: number[]): number[] {
  // initialize the output array with placeholder values
  const output = new Array(T.length).fill(0);
  const stack: [number, number][] = [];

  for (let [index, temp] of T.entries()) {
    while (stack && stack[stack.length - 1][1] < temp) {
      const cur = stack.pop();
      if (!cur) continue;
      const [prev_index, prev_temp] = cur;
      output[prev_index] = index = prev_index;
    }
    stack.push([index, temp]);
  }
  return output;
}
