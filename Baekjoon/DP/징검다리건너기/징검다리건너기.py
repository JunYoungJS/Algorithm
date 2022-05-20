import sys
def input():
    return sys.stdin.readline().rstrip()


n=int(input())
dp=[9999999]*20000
jumps=[0]

for _ in range(n-1):
    a,b=map(int,input().split())
    jumps.append([a,b])

k=int(input())
cur=1
dp[0]=0
dp[cur]=0
# 1점프와 2점프를 사용했을떄의 해당 위치까지 최소 도달값을 구함
while cur!=n:
      small,big_jump=jumps[cur]

      if cur+1<=n:
          dp[cur+1]=min(dp[cur+1],dp[cur]+small)

      if cur+2<=n:
          dp[cur + 2]=min(dp[cur+2],dp[cur]+big_jump)

      cur+=1




answer=dp[n]
# 큰 점프는 단한번만 사용이 가능하므로 큰 점프를 사용할수있는 구간에서 큰점프를한뒤 1과 2점프를 시킴 
for i in range(1,n):
    tmp=[999999]*(n+1)
    if i+3<=n:
        if dp[i+3]>dp[i]+k:
           start_cost=dp[i]+k
           tmp[i+3]=start_cost
           for j in range(i+3,n):
               small,big_jump=jumps[j]
               if j+1<=n:
                  tmp[j+1]=min(tmp[j+1],small+tmp[j])
               if j+2<=n:
                  tmp[j+2]=min(tmp[j+2],big_jump+tmp[j])


           answer=min(answer,tmp[n])
    else:
        break




print(answer)

