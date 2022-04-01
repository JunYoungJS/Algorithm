#  정답 73프로 나중에 다시 보기 
import copy

answer = False
dx= [0,1,0,-1]
dy=[1,0,-1,0]
board_row=0
board_col=0
def check_range(x,y):
    global board_row,board_col
    if x<0 or y<0 or x>=board_row or y>=board_col:
        return False

    return True

def check_key(x,y,board,key):
    row=len(key)
    col=len(key[0])

    for i in range(x,x+row):
        for j in range(y,y+col):
              if check_range(i,j) and i-x<0 or j-y<0 or i-x>=row or j-y>=col:
                if board[i][j]+key[i-x][j-y]==0 or board[i][j]+key[i-x][j-y]==2:
                    return False


    return True




def rotate(board):
    tmp=copy.deepcopy(board)
    row=len(board)
    col=len(board[0])

    for i in range(row):
        for j in range(col):
            board[i][j]=tmp[col-1-j][i]

    return

def dfs(x,y,board,key,visited):
    global answer

    for _ in range(4):
        if check_key(x,y,board,key):
            answer=True
            return
        else:
            rotate(key)


    for i in range(4):
        next_x=x+dx[i]
        next_y=y+dy[i]
        if(check_range(next_x,next_y) and visited[next_x][next_x]==False):
            visited[next_x][next_y]=True
            dfs(next_x,next_y,board,key,visited)


    return

def solution(key, lock):
    global board_row,board_col
    board_row=len(lock)
    board_col=len(lock[0])

    visited=[False]*board_row
    for i in range(board_col):
        visited[i]=[False]*board_col

    visited[0][0]=True

    dfs(0,0,lock,key,visited)


    return answer



solution([[1,1,1],[1,1,1],[1,1,1]],[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1]])