import sys

def input():
    return sys.stdin.readline().rstrip()


n,m=map(int,input().split())
weight=list(map(int,input().split()))
weight.insert(0,0)
people=[[] for i in range(n+1)]
for i in range(m):
    a,b=map(int,input().split())
    people[a].append(b)
    people[b].append(a)


answer=0
for i in range(1,n+1):
    my_weight=weight[i]
    flag=True
    for j in people[i]:
        other_weight=weight[j]
        if my_weight<=other_weight:
            flag=False
            break

    if flag:
        answer+=1

print(answer)

