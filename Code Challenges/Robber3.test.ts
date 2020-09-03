/* 
class Solution:
    def helper(self, root: TreeNode):
        if not root:
            return [0, 0]
        res = [0, 0]
        left = self.helper(root.left)
        right = self.helper(root.right)
        res[0] = root.val + left[1] + right[1]
        res[1] = max(left[0], left[1]) + max(right[0], right[1])
        return res
    def rob(self, root: TreeNode) -> int:
        if not root:
            return 0
        res = self.helper(root);
        return max(res[0], res[1])
*/