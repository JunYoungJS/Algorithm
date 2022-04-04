def solution(N, road, K):
    visited = [999999] * (N + 1)
    graph = [0] * (N + 1)
    answer=0

    for i in road:
        cur,next,c=i
        if graph[cur]==0:
            graph[cur]=[]
        if graph[next]==0:
            graph[next]=[]

        graph[cur].append([next,c])
        graph[next].append([cur,c])

    def dfs(cur):
        global answer
        for i in graph[cur]:
            next,cost=i
            cost+=visited[cur]
            if visited[next]>cost and cost<=K:
                visited[next]=cost
                dfs(next)

        return

    visited[1]=0
    dfs(1)
    for i in visited:
        if i<=K:
            answer+=1

    return answer




solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3)