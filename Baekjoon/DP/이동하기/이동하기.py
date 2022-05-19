import sys
def input():
    return sys.stdin.readline().rstrip()


n,m=map(int,input().split())
board=[0]*n
dp=[0]*n
for i in range(n):
    board[i]=list(map(int,input().split()))
    dp[i]=[0]*m


for i in range(n):
    for j in range(m):
        dp[i][j]=board[i][j]
        if i-1>=0:
            dp[i][j]=max(dp[i][j],dp[i-1][j]+board[i][j])

        if i-1>=0 and j-1>=0:
            dp[i][j]=max(dp[i][j],dp[i-1][j-1]+board[i][j])

        if j-1>=0:
            dp[i][j]=max(dp[i][j],dp[i][j-1]+board[i][j])


print(dp[n-1][m-1])