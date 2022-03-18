const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let [n,m]=input.shift().split(' ')
n=+n
m=+m
let board=[]
let visited=Array.from(Array(+n),()=>Array(+m).fill(false))
input.map((e)=>board.push(e.split(' ')))

const bfs=(cur_x,cur_y)=>{
    let queue=[]
    visited[cur_x][cur_y]=true
    queue.unshift([cur_x,cur_y])
    let cnt=1
    while(queue.length!=0){
        let [cx,cy]=queue.shift()
        for(let i=0;i<4;i++){
            let nx=dx[i]+cx
            let ny=dy[i]+cy

            if(nx<0 || ny<0 || nx>=n || ny>=m){
                continue
            }
            if(!visited[nx][ny] && board[nx][ny]=='1'){
                visited[nx][ny]=true
                queue.unshift([nx,ny])
                cnt+=1
            }
        }
    }
    return cnt
}
let answer_cnt=0
let answer_max=0
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(board[i][j]=='1' && !visited[i][j]){
            answer_max=Math.max(answer_max,bfs(i,j))
            answer_cnt+=1
        }
    }
}

console.log(answer_cnt)
console.log(answer_max)