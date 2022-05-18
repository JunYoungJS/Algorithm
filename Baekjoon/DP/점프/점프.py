import sys
def input():
    return sys.stdin.readline().rstrip()

n=int(input())
board=[[0]*n for _ in range(n)]
dp=[[0]*n for _ in range(n)]

for i in range(n):
    board[i]=list(map(int,input().split()))


dp[0][0]=1
# 1. 무조건 0,0에서부터 시작 1이상인것을 다음경로를 이어줌
for i in range(n):
    for j in range(n):
        if i==n-1 and j==n-1:continue
        # dp[i][j]= 0에서 해당경로까지가는 경우의수 
        if dp[i][j]!=0:
            next = board[i][j]
            down=i+next
            right=j+next
            if down<n:
                dp[down][j]+=dp[i][j]
            if right<n:
                dp[i][right]+=dp[i][j]




print(dp[n-1][n-1])