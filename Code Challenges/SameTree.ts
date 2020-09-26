function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  return (
    !!p &&
    !!q &&
    p.val == q.val &&
    isSameTree(p.right, q.right) &&
    isSameTree(p.left, q.left)
  );
}
