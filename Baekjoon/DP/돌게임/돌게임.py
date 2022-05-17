import sys
def input():
    return sys.stdin.readline().rstrip()

n=int(input())
dp=[0]*(n+1)

if n==3:
    dp[1]=0
else:
    dp[1]=n-1

for i in range(2,n+1):
    if dp[i-1]==3:
        dp[i]=0
    else:
        dp[i]=dp[i-1]-1


for i in range(1,n+1):
    if dp[i]==0:
        if i%2==0:
            print("CY")
            break
        else:
            print("SK")
            break