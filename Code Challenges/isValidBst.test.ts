/* 
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.


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

function inorder(root: TreeNode, output: number[]) {
  if (!root) return output;
  if (root.left) inorder(root.left, output);
  output.push(root.val);
  if (root.right) inorder(root.right, output);
  return output;
}

function isValidBST(root: TreeNode) {
  const traversed = inorder(root, []);
  for (let i = 0; i < traversed.length - 1; i++) {
    if (traversed[i] >= traversed[i + 1]) return false;
  }
  return true;
}
