def dfs(start,graph,visited):

    visited[start]=True
    for next in graph[start]:
        if visited[next]==False:
            dfs(next,graph,visited)

    return
def solution(n, computers):
    answer = 0
    graph=[0]*(n)
    visited=[False]*(n)
    for i in range(n):
        graph[i]=list()

    for i in range(len(computers)):
        for j in range(len(computers[i])):
            if i==j:continue
            if computers[i][j]==1:
                graph[i].append(j)


    for i in range(n):
        if visited[i]==False:
            dfs(i,graph,visited)
            answer+=1


    return answer


solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]])