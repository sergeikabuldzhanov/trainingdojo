/* 
class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        stack = [[0]]
        paths = []
        while stack:
            path = stack.pop()
            last_node = path[-1]
            if last_node == len(graph)-1:
                paths.append(path)
            else:
                for node in graph[last_node]:
                    next_path = path + [node]
                    stack.append(next_path)
        return paths
    Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
    Input: [[1,2], [3], [3], []] 
    Output: [[0,1,3],[0,2,3]] 
    Explanation: The graph looks like this:
    0--->1
    |    |
    v    v
    2--->3
    There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Note:

    The number of nodes in the graph will be in the range [2, 15].
    You can print different paths in any order, but you should keep the order of nodes inside one path.

*/

function allPathsSourceTarget(graph: number[][]) {
  const stack = [[0]];
  const paths: number[][] = [];

  while (stack.length) {
    const current_path = stack.pop();

    if (!current_path) continue;

    const last_node = current_path[current_path.length-1];
    if (last_node === graph.length - 1) {
      paths.push(current_path);
    } else {
      for (let node of graph[last_node]) {
        const new_path = [...current_path, node];
        stack.push(new_path);
      }
    }
  }
  return paths
}
