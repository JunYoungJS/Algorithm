import sys
def input():
    return sys.stdin.readline().rstrip()

def isValid(x,y):
    global visited
    if visited[x-1][y]==1 and visited[x-1][y-1]==1 and visited[x][y-1]==1:
        return True

    return False

def dfs(cnt):
    global n,m,answer,visited
    if n*m==cnt:
        answer+=1
        return

    x=cnt//m
    y=cnt%m

    # 1. 주변이 3개다 1이 아닌경우에는 방문 가능
    if isValid(x,y)==False:
        visited[x][y]=True
        dfs(cnt+1)
        visited[x][y]=False


    # 2. 주변이 3개다 1인경우 다음좌표로방문
    dfs(cnt+1)


    return

answer=0
n,m=map(int,input().split())
visited=[[0]*m for _ in range(n)]

dfs(0)
print(answer)