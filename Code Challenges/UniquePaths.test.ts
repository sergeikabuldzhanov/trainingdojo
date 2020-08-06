/* 
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # generate the first row of the grid with number of unqie paths for each cell
        grid = []
        for y in range(n):
            grid.append([])
            for x in range(m):
                grid[-1].append(1)
        for j in range(1, n):
            for i in range(m):
                grid[j][i] = grid[j-1][i] if i == 0 else grid[j-1][i] + grid[j][i-1]
                
        return grid[-1][-1]
*/

function uniquePaths(m: number, n: number) {
  const grid: number[][] = [];
  for (let y = 0; y < n; y++) {
    grid.push(new Array(m).fill(1));
  }
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < m; i++) {
      grid[j][i] = i == 0 ? grid[j - 1][i] : grid[j - 1][i] + grid[j][i - 1];
    }
  }
  return grid[n - 1][m - 1];
}
