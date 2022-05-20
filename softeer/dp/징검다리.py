# 가장 긴 증가하는 구간찾기import sys
def input():
    return sys.stdin.readline().rstrip()


n=int(input())
numbers=list(map(int,input().split()))

dp=[0]*n

for i in range(len(numbers)):
   dp[i]=1
   for j in range(i,-1,-1):
       if numbers[i]>numbers[j]:
            dp[i]=max(dp[i],dp[j]+1)

print(max(dp))