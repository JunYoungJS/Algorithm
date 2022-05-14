import sys

def input():
    return sys.stdin.readline().rstrip()


n,k=map(int,input().split())
scores=list(map(int,input().split()))
prefix_sum=[0]*(n+1)
scores.insert(0,0)
total=0
for i in range(1,n+1):
    total+=scores[i]
    prefix_sum[i]=total

for i in range(k):
    start,end=map(int,input().split())
    t=0
    t+=prefix_sum[end]-prefix_sum[start-1]

    cnt=(end-start)+1
    print('{:.2f}'.format(round(t/cnt,2)))
