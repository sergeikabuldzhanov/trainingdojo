/* 
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        ans = []
        
        def dfs(node, level):
            if not node:
                return
            if len(ans)>level:
                ans[level].append(node.val)
            else:
                ans.append([node.val])
            dfs(node.left, level + 1)
            dfs(node.right, level + 1)
        
        dfs(root, 0)
        ans.reverse()
        return ans
         */

function levelOrderBottom(root: TreeNode | null): number[][] {
  const output: number[][] = [];
  levelDfs(root, 0, output);
  return output.reverse();
}

function levelDfs(
  node: TreeNode | null,
  level: number,
  output: number[][]
): void {
  if (!node) return;
  if (output.length > level) {
    output[level].push(node.val);
  } else {
    output.push([node.val]);
  }
  levelDfs(node.left, level + 1, output);
  levelDfs(node.right, level + 1, output);
}
