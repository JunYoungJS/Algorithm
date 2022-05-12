import sys
def input():
    return sys.stdin.readline().rstrip()



n=int(input())
times=[0]
pays=[0]
dp=[0]*(n+2)
for i in range(1,n+1):
    t,p=map(int,input().split())
    times.append(t)
    pays.append(p)


prev_mav_time=0
for time in range(1,n+1):
    prev_mav_time=max(prev_mav_time,dp[time])
    if time+times[time]>n+1:continue
    dp[time+times[time]]=max(dp[time+times[time]],pays[time]+prev_mav_time)


print(max(dp))
