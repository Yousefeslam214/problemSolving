class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        arrH= [[] for _ in range(9)]  # Initialize arrH as an empty list
        Box = [[] for _ in range(9)]  # Initialize arrH as an empty list
        for i in zip(*board):
            for num in range(9):
                # print(i[num])
                arrH[num].append(i[num])
        # print(\egypt\)
        for row in arrH:
            seen = set()
            for num in row:
                if num != \.\:
                    if num in seen:
                        # print(\Duplicate number found:\, num)
                        print(\false\)
                        return
                    else:
                        seen.add(num)
        for row in zip(*board):
            seen = set()
            for num in row:
                if num != \.\:
                    if num in seen:
                        # print(\Duplicate number found:\, num)
                        print(\false\)
                        return
                    else:
                        seen.add(num)
        
        # box = []  # Move the declaration of 'box' outside of the loop
        for row in zip(*board):
            # print(row[3])
            for i in range(0, 9, 3):
                for j in range(0, 9, 3):
                    box = []
                    for row in board[i:i+3]:
                        # print()
                        box.extend(row[j:j+3])
                        Box.append(box)
            # print(Box)
            # # for b in row
            # seen = set()
            # for num in row:
            #     if num != \.\:
            #         if num in seen:
            #             # print(\Duplicate number found:\, num)
            #             print(\\false\\)
            #             return
            #         else:
            #             seen.add(num)
            
        
        for row in Box:
            seen = set()
            for num in row:
                if num != \.\:
                    if num in seen:
                        # print(\Duplicate number found:\, num)
                        print(\false\)
                        return
                    else:
                        seen.add(num)
        return True
