/* 
There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the top to the bottom and cross the least bricks.
The brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right
If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks.
You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

Example:
Input: [[1,2,2,1],
        [3,1,2],
        [1,3,2],
        [2,4],
        [3,1,2],
        [1,3,1,1]]

Output: 2
 */

function leastBreaks(wall: number[][]): number {
  const edge_lineup_count: { [key: number]: number } = {};
  const width = wall[0].reduce((acc, cur) => acc + cur);
  for (let row of wall) {
    let current = 0;
    for (let brick of row) {
      current += brick;
      if (current in edge_lineup_count) {
        edge_lineup_count[current] += 1;
      } else {
        edge_lineup_count[current] = 1;
      }
    }
  }
  if (Object.keys(edge_lineup_count).length === 1) return wall.length;
  delete edge_lineup_count[width];
  return wall.length - Math.max(...Object.values(edge_lineup_count));
}

describe("leastBreaks", () => {
  test("default test case", () => {
    const wall = [
      [1, 2, 2, 1],
      [3, 1, 2],
      [1, 3, 2],
      [2, 4],
      [3, 1, 2],
      [1, 3, 1, 1],
    ];

    expect(leastBreaks(wall)).toBe(2);
  });
  test("[1],[1],[1] wall", () => {
    const wall = [[1], [1], [1]];
    expect(leastBreaks(wall)).toBe(3);
  });
  test("[1,2] single row wall", () => {
    const wall = [[1, 2]];
    expect(leastBreaks(wall)).toBe(0);
  });
});
