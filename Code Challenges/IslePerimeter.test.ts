/* 
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        perimeter = 0
        # look at every cell in the grid
        height = len(grid)
        width = len(grid[0])
        for y in range(height):
            for x in range(width):
                if grid[y][x] is 1:
                    # determine the number of nearby water cells (0)
                    # conditional ? true_calue : flase_value
                    # true_value if conditional else false_value
                    top = grid[y-1][x] if y-1 < height and y-1 >= 0 else 0
                    right = grid[y][x+1] if x+1 < width and x+1 >= 0 else 0
                    left = grid[y][x-1] if x-1 < width and x-1 >= 0 else 0
                    bottom = grid[y+1][x] if y+1 < height and y+1 >= 0 else 0
                    
                    if top == 0:
                        perimeter += 1
                    if right == 0:
                        perimeter += 1
                    if left == 0:
                        perimeter += 1
                    if bottom == 0:
                        perimeter += 1
        # sum the total 
        return perimeter
*/

function islandPerimeter(grid: number[][]) {
  let perimeter = 0;
  const height = grid.length;
  const width = grid[0].length;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === 1) {
        const top = y - 1 < height && y - 1 >= 0 ? grid[y - 1][x] : 0;
        const right = x + 1 < width && x + 1 >= 0 ? grid[y][x + 1] : 0;
        const left = x - 1 < width && x - 1 >= 0 ? grid[y][x - 1] : 0;
        const bottom = y + 1 < height && y + 1 >= 0 ? grid[y + 1][x] : 0;

        if (top === 0) perimeter += 1;
        if (right === 0) perimeter += 1;
        if (left === 0) perimeter += 1;
        if (bottom === 0) perimeter += 1;
      }
    }
  }
  return perimeter;
}
