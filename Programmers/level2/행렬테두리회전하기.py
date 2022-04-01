#-*- coding: utf-8 -*-
import copy

dx=[0,1,0,-1]
dy=[1,0,-1,0]

# 오른쪽 아래 왼쪽 위쪽
def rotate(s_x,s_y,e_x,e_y,board):

    a=s_x
    b=s_y
    tmp=[]
    answer=9999999999
    tmp.append(board[s_x][s_y])
    for i in range(4):
        while True:
            nx=s_x+dx[i]
            ny=s_y+dy[i]
            if nx>e_x or ny>e_y or nx<a or ny<b:
                break

            tmp.append(board[nx][ny])
            board[nx][ny]=tmp.pop(0)

            answer=min(answer,(board[nx][ny]))
            s_x=nx
            s_y=ny


    return answer


def solution(rows, columns, queries):
    answer = []
    board=[0]*(101)
    for i in range(101):
       board[i]=[0]*(101)

    cnt=1
    for i in range(1,rows+1):
        for j in range(1,columns+1):
            board[i][j]=cnt
            cnt+=1

    while len(queries)!=0:
          s_x,s_y,e_x,e_y=queries.pop(0)
          answer.append(rotate(s_x,s_y,e_x,e_y,board))

    return answer


solution(6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]])