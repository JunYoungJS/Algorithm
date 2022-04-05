dx=[0,1,0,-1]
dy= [1,0,-1,0]
answer = 0
def move(x,y,visited,dirs):
    global answer
    for i in dirs:
        if i=='U':
            nx=dx[0]+x
            ny=dy[0]+y
        elif i=='D':
             nx=dx[2]+x
             ny=dy[2]+y

        elif i=='L':
             nx=dx[3]+x
             ny=dy[3]+y
        else:
            nx=dx[1]+x
            ny=dy[1]+y


        if (x,y,nx,ny) in visited:
            x=nx
            y=ny
            continue


        if nx<-5 or ny<-5 or nx>5 or ny>5:
            continue

        visited.add((x,y,nx,ny))
        visited.add((nx,ny,x,y))
        answer+=1
        x=nx
        y=ny

    return
def solution(dirs):
    visited=set()
    move(0,0,visited,dirs)
    print(answer)
    return answer


# solution("UDU")
# #solution("LULLLLLLU"	)