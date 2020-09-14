class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        rowsol = [set(str(i) for i in range(1,10)) for _ in range(9)]
        colsol = [set(str(i) for i in range(1,10)) for _ in range(9)]
        boxsol = [[set(str(i) for i in range(1,10)) for _ in range(3)]
                 for _ in range(3)]
        for row in range(9):
            for col in range(9):
                if board[row][col]!='.':
                    if board[row][col] in rowsol[row]: rowsol[row].remove(board[row][col])
                    if board[row][col] in colsol[col]: colsol[col].remove(board[row][col])
                    if board[row][col] in boxsol[row//3][col//3]:
                        boxsol[row//3][col//3].remove(board[row][col])
        
        todo = []
        for row in range(9):
            for col in range(9):
                if board[row][col]=='.':
                    sol = rowsol[row].intersection(colsol[col]).intersection(
                                boxsol[row//3][col//3])
                    todo.append((len(sol), row, col))
        
        heapq.heapify(todo)
        def helper():
            if not todo: return True
            _, row, col = heapq.heappop(todo)
            sol = rowsol[row].intersection(colsol[col]).intersection(
                        boxsol[row//3][col//3])
            for val in sol:
                rowsol[row].remove(val)
                colsol[col].remove(val)
                boxsol[row//3][col//3].remove(val)
                board[row][col] = val
                succeed = helper()
                if succeed: return True
                else:
                    rowsol[row].add(val)
                    colsol[col].add(val)
                    boxsol[row//3][col//3].add(val)
                    board[row][col] = '.'
            
            heapq.heappush(todo, (len(sol), row, col))
            return False
        
        helper()
            