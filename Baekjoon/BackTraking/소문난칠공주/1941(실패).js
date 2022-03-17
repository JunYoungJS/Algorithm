let dx=[0,0,1,-1]
let dy=[1,-1,0,0]

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let board=[]
// 2x2배열 선언 
let visited=Array.from(Array(5),()=>Array(5).fill(false))
input.map(e=>board.push(e.split('')),)
let answer=new Set()
let answer_list=[]


const dfs=(cur_x,cur_y,y_count,s_count,answer_list)=>{
    if(y_count>=4){
        return
    }

    if(y_count+s_count==7 && s_count>=4){ //7명의 여학생
            answer_list.sort()
            answer.add(answer_list.join(','))
        }
        return
    }

    for(let i=0;i<4;i++){
        let nx=cur_x+dx[i]
        let ny=cur_y+dy[i]
        if(nx<0 || ny<0 || nx>=5 || ny>=5){
            continue
        }
        if(visited[nx][ny]){
            continue
        }
          
        visited[nx][ny]=true
        answer_list.push([nx,ny])
        if(board[nx][ny]=='Y'){
            dfs(nx,ny,y_count+1,s_count,answer_list)
        }
        else if(board[nx][ny]=='S'){
            dfs(nx,ny,y_count,s_count+1,answer_list)
        }
        answer_list.pop()

        visited[nx][ny]=false
    }
}


for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        visited[i][j]=true
        if(board[i][j]=='Y'){       
            dfs(i,j,1,0,answer_list)
        }
        else{
            dfs(i,j,0,1,answer_list)
        }
        visited[i][j]=false
    }
}

console.log(answer.size)

