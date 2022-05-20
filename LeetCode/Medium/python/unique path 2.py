class Solution(object):
    def uniquePathsWithObstacles(self, obstacleGrid):
      row=len(obstacleGrid)
      col=len(obstacleGrid[0])
      dp=[[0]*col for _ in range(row)]

      if obstacleGrid[0][0]==0:
        dp[0][0]=1

      for i in range(row):
          for j in range(col):
              if obstacleGrid[i][j]!=0:continue
              if i-1>=0 and dp[i-1][j]!=0:
                  dp[i][j]+=dp[i-1][j]

              if j-1>=0 and dp[i][j-1]!=0:
                  dp[i][j]+=dp[i][j-1]


      return dp[row-1][col-1]

