# coding=utf-8
#  2 × 2 사각형을 이루지 않는 모든 배치의 가짓수를 출력
import sys
answer=0
def dfs(cnt):
    global n,m,board,answer
    if cnt==n*m:
        answer+=1
        return
    x=(cnt//m)+1
    y=(cnt%m)+1
    dfs(cnt+1)
    # 주변에 하나라도 0이있으면
    if board[x-1][y-1]==0 or board[x-1][y]==0 or board[x][y-1]==0:
        board[x][y]=1
        dfs(cnt+1)
        board[x][y]=0



    return

n,m=map(int,sys.stdin.readline().rstrip().split())
board=[[0 for i in range(m+1)] for j in range(n+1) ]
dfs(0)
print(answer)
