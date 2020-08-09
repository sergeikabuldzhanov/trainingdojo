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
