import sys
import collections

def input():
    return sys.stdin.readline().rstrip()

def bfs(c):
    global n,graph,scores
    visited=[-1]*(n+1)
    queue=collections.deque()
    queue.append(c)
    visited[c]=0

    while queue:
          cur=queue.popleft()
          for next in graph[cur]:
              if visited[next]==-1:
                  visited[next]=visited[cur]+1
                  queue.append(next)




    max_depth=-9999999
    for i in range (1,n+1):
        max_depth=max(visited[i],max_depth)

    scores[c]=max_depth



n=int(input())
graph=[list() for _ in range(n+1)]
scores=[999999]*(n+1)
answer_number=0
while True:
    a,b=map(int,input().split())
    if a==-1 and b==-1:
        break
    graph[a].append(b)
    graph[b].append(a)


for i in range(1,n+1):
    bfs(i)


answer=[]
answer_number=min(scores)

for i in range(1,n+1):
    if answer_number==scores[i]:
        answer.append(i)


print(answer_number,len(answer))

for i in answer:
    print(i,end=' ')

