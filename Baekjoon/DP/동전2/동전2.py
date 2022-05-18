import sys
def input():
    return sys.stdin.readline().rstrip()


n,k=map(int,input().split())
coins=[]
dp=[10000000]*(100001)
dp[0]=0
for _ in range(n):
    t=int(input())
    coins.append(t)
    dp[t]=1

coins.sort()

for i in range(1,k+1):
    for coin in coins:
        if i<=coin:
           break
        else:
            dp[i]=min(dp[i],dp[i-coin]+1)

if dp[k]!=10000000:
    print(dp[k])
else:
    print(-1)