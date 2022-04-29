class Solution(object):

    def countSquares(self, matrix):
        row=len(matrix)
        col=len(matrix[0])
        answer=0


        for i in range(row):
            for j in range(col):
                if matrix[i][j]==1:
                    answer+=1
                    if i>0 and j>0:
                        matrix[i][j]=min(matrix[i-1][j],min(matrix[i-1][j-1],matrix[i][j-1]))+1

                    if matrix[i][j]>1:
                        answer+=matrix[i][j]
                        answer-=1

        return answer

