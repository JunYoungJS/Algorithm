import sys
def input():
    return sys.stdin.readline().rstrip()

t=int(input())
for i in range(t):
    n,m=map(int,input().split())
    dp=[0]*(n+1)
    for i in range(n+1):
        dp[i]=[0]*(m+1)

    # dp [n번사이트에 놓인 개수][m번사이트에 놓인개수]
    # dp[2][2]=1 , dp[2][3]=dp[1][2]+dp[1][1]
    for i in range(1,m+1):
        dp[1][i]=i

    for i in range(2,n+1):
        for j in range(1,m+1):
            for k in range(j-1,0,-1):
                dp[i][j]+=dp[i-1][k]



    print(dp[n][m])