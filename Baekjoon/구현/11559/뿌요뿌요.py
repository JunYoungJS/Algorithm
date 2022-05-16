import sys
import collections
dx= [0,1,0,-1]
dy= [1,0,-1,0]
def input():
    return sys.stdin.readline().rstrip()
def down(board):
    for i in range(6):
        for j in range(11,-1,-1):
            if board[j][i]=='.':continue
            tmp=j
            while True:
                  if tmp==11 or board[tmp+1][i]!='.':break
                  board[tmp+1][i]=board[tmp][i]
                  board[tmp][i]='.'
                  tmp+=1


    return

def bfs(cur_x,cur_y,visited,color):
    queue=collections.deque()
    queue.append([cur_x,cur_y])
    visited[cur_x][cur_y]=True
    remove_target=[[cur_x,cur_y]]

    while queue:
          c_x,c_y=queue.popleft()
          for i in range(4):
              nx=dx[i]+c_x
              ny=dy[i]+c_y
              if nx<0 or ny<0 or nx>=12 or ny>=6:continue
              if board[nx][ny]==color and visited[nx][ny]==False:
                  visited[nx][ny]=True
                  remove_target.append([nx,ny])
                  queue.append([nx,ny])


    flag=False
    if len(remove_target)>=4:
        flag=True
        while len(remove_target)!=0:
               a,b=remove_target.pop()
               board[a][b]='.'


    if flag:
        down(board)


    return flag


board=[['.']*6 for _ in range(12)]
for i in range(12):
    board[i]=list(map(str,input()))

answer=0


while True:
    flag = False

    visited = [[False] * 6 for _ in range(12)]
    for i in range(12):
          for j in range(6):
              if board[i][j]!='.' and visited[i][j]==False:
                  if bfs(i,j,visited,board[i][j]):
                      flag=True

    if flag==False:
        break
    else:
        answer+=1

print(answer)