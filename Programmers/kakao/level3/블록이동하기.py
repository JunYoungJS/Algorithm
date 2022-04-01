#-*- coding: utf-8 -*-

dx = [0,1,0,-1]
dy = [1,0,-1,0]
import collections
def isVaild(x,y,row,col):
    if x<0 or y<0 or x>=row or y>=col:
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

    for i in range(4):
        next_x1 = cur_x1 + dx[i]
        next_y1 = cur_y1 + dy[i]
        next_x2 = cur_x2 + dx[i]
        next_y2 = cur_y2 + dy[i]
        if isVaild(next_x1, next_y1,row, col) and isVaild(next_x2,next_y2,row,col):
            if board[next_x1][next_y1]==0 and board[next_x2][next_y2]==0:
                if (next_x1, next_y1, next_x2, next_y2) not in visited:
                    queue.append([next_x1, next_y1, next_x2, next_y2, cost + 1])
                    visited.add((next_x1, next_y1, next_x2, next_y2))

    # 1. 로봇이 가로 일떄 회전
    if cur_x1==cur_x2:
        for i in [1,-1]:
            if isVaild(cur_x1+i,cur_y1,row,col) and isVaild(cur_x2+i,cur_y2,row,col) and board[cur_x2+i][cur_y2]==0 and board[cur_x1+i][cur_y1]==0:
                if (cur_x1,cur_y1,cur_x1+i,cur_y1) not in visited:
                     queue.append([cur_x1, cur_y1, cur_x1 + i, cur_y1,cost+1])
                     visited.add((cur_x1, cur_y1, cur_x1 + i, cur_y1,cost+1))

                if (cur_x2,cur_y2,cur_x2+i,cur_y2) not in visited:
                    queue.append([cur_x2,cur_y2,cur_x2+i,cur_y2,cost+1])
                    visited.add((cur_x2,cur_y2,cur_x2+i,cur_y2,cost+1))


    # #5. 로봇이 세로 일떄
    elif cur_y1==cur_y2:
         for i in [1,-1]:
             if isVaild(cur_x2,cur_y2+i,row,col) and isVaild(cur_x1,cur_y1+i,row,col) and board[cur_x2][cur_y2+i]==0 and board[cur_x1][cur_y1+i]==0:
                if (cur_x2,cur_y2,cur_x2,cur_y2+i) not in visited:
                   queue.append([cur_x2,cur_y2,cur_x2,cur_y2+i,cost+1])
                   visited.add((cur_x2,cur_y2,cur_x2,cur_y2+i))


                if (cur_x1,cur_y1,cur_x1,cur_y1+i) not in visited:
                   queue.append([cur_x1,cur_y1,cur_x1,cur_y1+i,cost+1])
                   visited.add((cur_x1,cur_y1,cur_x1,cur_y1+i))

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
    return answer

solution([[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]])