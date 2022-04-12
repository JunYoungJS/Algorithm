cnt=0

def dfs(start,visted,graph):
    global cnt
    visted[start]=True
    cnt+=1

    for next in graph[start]:
        if visted[next]==False:
            dfs(next,visted,graph)
    return

def solution(n, wires):
    global cnt
    answer = 9999999
    graph=[0]*(n+1)
    for i in range(1,n+1):
        graph[i]=list()


    for i in wires:
        a,b=i
        graph[a].append(b)
        graph[b].append(a)


    for i in wires:
        a,b=i
        visited = [0] * (n + 1)
        graph[a].remove(b)
        graph[b].remove(a)

        tmp=[]
        for i in range(1,n+1):
            if visited[i]==0:
                cnt=0
                dfs(i,visited,graph)
                tmp.append(cnt)

        answer=min(answer,abs(tmp[0]-tmp[1]))
        graph[a].append(b)
        graph[b].append(a)

    print(answer)

    return answer

