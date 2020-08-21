/* 
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Follow up:

Could you optimize your algorithm to use only O(k) extra space?
class Solution:
    def getRow(self, rowIndex: int, cache = {0:[1]}) -> List[int]:
        if rowIndex in cache:
            return cache[rowIndex]
        prev_row = self.getRow(rowIndex-1)
        new_row = [1]*(rowIndex+1)
        for i in range(1, rowIndex):
            new_row[i] = prev_row[i-1] + prev_row[i]
        cache[rowIndex] = new_row
        return new_row
*/
function getRow(
  rowIndex: number,
  cache: { [key: number]: number[] } = { 1: [1] }
): number[] {
  if (rowIndex in cache) return cache[rowIndex];
  const prevRow = getRow(rowIndex, cache);
  const newRow = new Array(rowIndex + 1).fill(1);
  for (let i = 1; i < rowIndex; i++) {
    newRow[i] = prevRow[i - 1] + prevRow[i];
  }
  cache[rowIndex] = newRow;
  return newRow;
}
