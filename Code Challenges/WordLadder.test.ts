/* 
import collections
class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        if endWord not in wordList or not endWord or not beginWord: return 0
        neighbors = collections.defaultdict(list)

        def visit(dq, visited, visited_others):
            word, depth = dq.popleft()
            for i in range(len(word)):
                p = word[:i] + "*" + word[i+1:]
                for nei in neighbors[p]:
                    if nei in visited_others:
                        return depth+visited_others[nei]
                    if nei not in visited:
                        visited[nei] = depth+1                            
                        dq.append((nei, depth+1))
            return None
        
        for word in wordList:
            for i in range(len(word)):
                neighbors[word[:i] + "*" + word[i+1:]].append(word)
            
        dq1, dq2 = collections.deque([(beginWord, 1)]), collections.deque([(endWord, 1)])
        visited1, visited2 = {beginWord: 1}, {endWord: 1}
        ans = None
        while dq1 and dq2:
            ans = visit(dq1, visited1, visited2)
            if ans: return ans
            ans = visit(dq2, visited2, visited1)
            if ans: return ans
        return 0

*/
