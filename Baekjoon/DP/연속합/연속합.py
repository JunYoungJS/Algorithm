import sys
def input():
    return sys.stdin.readline().rstrip()


n=int(input())
numbers=list(map(int,input().split()))
dp=[-11111]*(n+1)

for i in range(len(numbers)):
    dp[i]=dp[i-1]+numbers[i]
    if dp[i]<numbers[i]:
        dp[i]=numbers[i]


print(max(dp))