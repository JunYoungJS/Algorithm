# -*- coding: utf-8 -*-
dx = [0,1,0,-1]
dy = [1,0,-1,0]
import collections
def isVaild(x,y,x2,y2,row,col):
    if x<0 or y<0 or x>=row or y>=col:
        return False

    if x2<0 or y2<0 or x2>=row or y2>=col:
        return False

    return True

def move(cur_pos,board,visited,queue):
    row= len(board)
    col=len(board[0])

    cur_x1=cur_pos[0]
    cur_y1=cur_pos[1]
    cur_x2=cur_pos[2]
    cur_y2=cur_pos[3]
    cost=cur_pos[4]

    # 1. 로봇이 가로 일떄 회전 없이 상하좌우 이동

    if cur_x1==cur_x2:
        for i in range(4):
            next_x1=cur_x1+dx[i]
            next_y1=cur_y1+dy[i]
            next_x2=cur_x2+dx[i]
            next_y2=cur_y2+dy[i]
            if isVaild(next_x1,next_y1,next_x2,next_y2,row,col) and board[next_x1][next_y1]==0 and board[next_x2][next_y2]==0:
                if (next_x1,next_y1,next_x2,next_y2) not in visited:
                    queue.append([next_x1,next_y1,next_x2,next_y2,cost+1])
                    visited.add((next_x1,next_y1,next_x2,next_y2))

        # 2. 로봇이 가로일떄 왼쪽 기준 회전=> 세로됨
        if isVaild(cur_x1+1,cur_y1,cur_x2+1,cur_y2,row,col)and board[cur_x1+1][cur_y1]==0 and board[cur_x2+1][cur_y2]==0:
            if (cur_x2,cur_y2,cur_x2+1,cur_y2) not in visited:
                queue.append([cur_x2,cur_y2,cur_x2+1,cur_y2,cost+1])
                visited.add((cur_x2,cur_y2,cur_x2+1,cur_y2))


        # 3. 로봇이 가로일떄 오른쪽 기준으로 회전 =>세로됨
        if isVaild(cur_x1+1,cur_y1,cur_x2+1,cur_y2,row,col) and board[cur_x2+1][cur_y2]==0 and board[cur_x1+1][cur_y1]==0:
            if (cur_x1,cur_y1,cur_x1+1,cur_y1) not in visited:
                queue.append([cur_x1,cur_y1,cur_x1+1,cur_y1,cost+1])
                visited.add((cur_x1,cur_y1,cur_x1+1,cur_y1))


    # #5. 로봇이 세로 일떄
    elif cur_y1==cur_y2:
        for i in range(4):
            next_x1=cur_x1+dx[i]
            next_y1=cur_y1+dy[i]
            next_x2=cur_x2+dx[i]
            next_y2=cur_y2+dy[i]
            if isVaild(next_x1,next_y1,next_x2,next_y2,row,col) and board[next_x1][next_y1]==0 and board[next_x2][next_y2]==0:
                if (next_x1,next_y1,next_x2,next_y2) not in visited:
                    queue.append([next_x1,next_y1,next_x2,next_y2,cost+1])
                    visited.add((next_x1, next_y1, next_x2, next_y2))


        if isVaild(cur_x1+1,cur_y1+1,cur_x1,cur_y1+1,row,col) and board[cur_x1+1][cur_y1+1]==0 and board[cur_x1][cur_y1+1]==0:
            if(cur_x1,cur_y1,cur_x1,cur_y1+1) not in visited:
                queue.append([cur_x1,cur_y1,cur_x1,cur_y1+1,cost+1])
                visited.add((cur_x1,cur_y1,cur_x1,cur_y1+1))


        if isVaild(cur_x2,cur_y2-1,cur_x1,cur_y1-1,row,col) and board[cur_x2][cur_y2-1]==0 and board[cur_x1][cur_y1-1]==0:
            if(cur_x1,cur_y1-1,cur_x2-1,cur_y2) not in visited:
                queue.append([cur_x1,cur_y1-1,cur_x2-1,cur_y2,cost+1])
                visited.add((cur_x1,cur_y1-1,cur_x2-1,cur_y2-1))


    return
def bfs(row,col,board):
    queue=collections.deque()
    visited=set()
    queue.append([0,0,0,1,0])
    visited.add((0,0,0,1))

    while queue:
          cur=queue.popleft()
          if (cur[2]==row-1 and cur[3]==col-1) or (cur[0]==row-1 and cur[1]==col-1):
              return cur[4]

          move(cur,board,visited,queue)





    return



def solution(board):
    answer=bfs(len(board),len(board[0]),board)

    return answer-1

solution([[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]])