const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const solution = [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function solveSudoku(board: string[][]): void {
  // process the board and figure out what are the present digits for every row, column, and box
  // initiazize everything with a full set of nums
  const rows: Set<string>[] = new Array(9).fill(0).map(() => new Set(nums));
  const cols: Set<string>[] = new Array(9).fill(0).map(() => new Set(nums));
  const boxes: Set<string>[][] = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Set(nums)));
  const stack: number[][] = [];
  // here we remove the present nums from the possibilities
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cur = board[row][col];
      if (cur === ".") {
        stack.push([row, col]);
        continue;
      }
      cols[col].delete(cur);
      rows[row].delete(cur);
      boxes[Math.floor(row / 3)][Math.floor(col / 3)].delete(cur);
    }
  }
  //   console.log(stack);
  function helper() {
    if (!stack.length) return true;

    const [row, col] = stack.pop();
    const possibleDigits = nums.filter(
      (dig) =>
        rows[row].has(dig) &&
        cols[col].has(dig) &&
        boxes[Math.floor(row / 3)][Math.floor(col / 3)].has(dig)
    );
    // console.log(possibleDigits);
    for (let dig of possibleDigits) {
      board[row][col] = dig;
      //   console.log(board);
      rows[row].delete(dig);
      cols[col].delete(dig);
      boxes[Math.floor(row / 3)][Math.floor(col / 3)].delete(dig);
      if (helper()) return true;
      rows[row].add(dig);
      cols[col].add(dig);
      boxes[Math.floor(row / 3)][Math.floor(col / 3)].add(dig);
      board[row][col] = ".";
    }
    stack.push([row, col]);
    return false;
  }
  helper();
}

test("default test case", () => {
  console.log(board);
  solveSudoku(board);
  console.log(board);
  expect(board).toEqual(solution);
});

/* 
1. class Solution:
2.     def maxPathSum(self, root: TreeNode) -> int:
3. 		max_path = float("-inf") # placeholder to be updated
4. 		def get_max_gain(node):
5. 			nonlocal max_path # This tells that max_path is not a local variable
6. 			if node is None:
7. 				return 0
8. 				
9. 			gain_on_left = max(get_max_gain(node.left), 0) # Read the part important observations
10. 		gain_on_right = max(get_max_gain(node.right), 0)  # Read the part important observations
11. 			
12. 		current_max_path = node.val + gain_on_left + gain_on_right # Read first three images of going down the recursion stack
13. 		max_path = max(max_path, current_max_path) # Read first three images of going down the recursion stack
14. 			
15. 		return node.val + max(gain_on_left, gain_on_right) # Read the last image of going down the recursion stack
16. 			
17. 			
18. 	get_max_gain(root) # Starts the recursion chain
19. 	return max_path		

*/
class BinaryHeap {
  content: any[];
  scoreFunction: any;
  constructor(scoreFunction: any) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }
  push(element: any) {
    // Add the new element to the end of the array.
    this.content.push(element);
    // Allow it to bubble up.
    this.bubbleUp(this.content.length - 1);
  }

  pop(): any {
    // Store the first element so we can return it later.
    var result = this.content[0];
    // Get the element at the end of the array.
    var end = this.content.pop();
    // If there are any elements left, put the end element at the
    // start, and let it sink down.
    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return result;
  }

  remove(node: any) {
    var length = this.content.length;
    // To remove a value, we must search through the array to find
    // it.
    for (var i = 0; i < length; i++) {
      if (this.content[i] != node) continue;
      // When it is found, the process seen in 'pop' is repeated
      // to fill up the hole.
      var end = this.content.pop();
      // If the element we popped was the one we needed to remove,
      // we're done.
      if (i == length - 1) break;
      // Otherwise, we replace the removed element with the popped
      // one, and allow it to float up or sink down as appropriate.
      this.content[i] = end;
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  }

  size() {
    return this.content.length;
  }

  bubbleUp(n: any) {
    // Fetch the element that has to be moved.
    var element = this.content[n],
      score = this.scoreFunction(element);
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = Math.floor((n + 1) / 2) - 1,
        parent = this.content[parentN];
      // If the parent has a lesser score, things are in order and we
      // are done.
      if (score >= this.scoreFunction(parent)) break;

      // Otherwise, swap the parent with the current element and
      // continue.
      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  }

  sinkDown(n: any) {
    // Look up the target element and its score.
    var length = this.content.length,
      element = this.content[n],
      elemScore = this.scoreFunction(element);

    while (true) {
      // Compute the indices of the child elements.
      var child2N = (n + 1) * 2,
        child1N = child2N - 1;
      // This is used to store the new position of the element,
      // if any.
      var swap = null;
      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = this.content[child1N],
          child1Score = this.scoreFunction(child1);
        // If the score is less than our element's, we need to swap.
        if (child1Score < elemScore) swap = child1N;
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        var child2 = this.content[child2N],
          child2Score = this.scoreFunction(child2);
        if (child2Score < (swap == null ? elemScore : child1Score))
          swap = child2N;
      }

      // No need to swap further, we are done.
      if (swap == null) break;

      // Otherwise, swap and continue.
      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
}
