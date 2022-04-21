import collections
def bfs(start,graph,visited,depth):
    queue=collections.deque()
    queue.append(start)
    visited[start]=1

    while queue:
          cur=queue.popleft()
          dist=visited[cur]+1
          for i in graph[cur]:
              next=i
              if visited[next]==0:
                  visited[next]=dist
                  queue.append(next)
    return

def solution(n, edge):
    answer = 0
    graph=[0]*(n+1)
    visited=[0]*(n+1)
    for i in range(1,n+1):
        graph[i]=list()

    for i in edge:
        a,b=i
        graph[a].append(b)
        graph[b].append(a)

    bfs(1,graph,visited,1)
    max_value=max(visited)
    for i in range(1,len(visited)):
        if visited[i]==max_value:
            answer+=1


    return answer

solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])