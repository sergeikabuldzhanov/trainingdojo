/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  return treeIsMirror(root.left, root.right);
}

function treeIsMirror(a: TreeNode | null, b: TreeNode | null): boolean {
  if (!a && !b) return true;
  if (!(a && b)) return false;
  return (
    a.val === b.val &&
    treeIsMirror(a.left, b.right) &&
    treeIsMirror(a.right, b.left)
  );
}

test("Empty input", () => {
  expect(isSymmetric(null)).toBe(true);
});

test("Basic case", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
  );
  expect(isSymmetric(root)).toBe(true);
});
test("Basic case", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3)),
    new TreeNode(2, new TreeNode(3))
  );
  expect(isSymmetric(root)).toBe(false);
});
