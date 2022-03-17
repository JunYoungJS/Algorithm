let dx=[0,0,1,-1]
let dy=[1,-1,0,0]

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let board=[]
let board_visited=[]
input.map(e=>board.push(e.split('')),)
for(let i=0;i<25;i++){
    board_visited.push(false)
}

answer=0
// 1. 조합을 구함  (중복 포함 x) 1 2 3 4 5 는 2 1 3 4 5 와 같음 
const dfs=(depth,cur)=>{
    if(depth==7){
        if(isVaild() && isAdjacency()){ // 임도연이 4명이상이아니고 연결할수있으면
            answer+=1
        }
        return
    }

    for(let i=cur;i<25;i++){
        if(!board_visited[i]){
            board_visited[i]=true
            dfs(depth+1,i+1)
            board_visited[i]=false
        }
    }

}
// 2. 해당 조합이 조건에 맞는 지 확인 ( 1차원 => 2차원배열좌표값 변경) 임도연이 4명이상인지 
const isVaild=()=>{
    let y_count=0
    for(let i=0;i<25;i++){
        // 1차원 좌표를 2차원으로 바꿔주는 코드 
        const x=Math.floor(i/5)
        const y=Math.floor(i%5)
        
        if(board_visited[i] && board[x][y]=='Y'){ // 임도연이면 
            y_count+=1
        }
    }

    if(y_count>=4){
        return false
    }
    return true
}
const isAdjacency=()=>{
    // 5x5 배열로 선언
    let queue_visited=Array.from(Array(5),()=>Array(5).fill(false))
    let check_visited=Array.from(Array(5),()=>Array(5).fill(false))
    let queue=[]

    let flag=false

    // 고른 조합들을 체크해줌 
    for(let i=0;i<25;i++){
        const x=Math.floor(i/5)
        const y=Math.floor(i%5)
        if(board_visited[i] && !flag){ //좌표하나만 넣음 
            queue.push([x,y])
            queue_visited[x][y]=true
            flag=true
        }
        if(board_visited[i]){
            check_visited[x][y]=true
        }

    }

    // Bfs를 통해 해당 조합이 연결되어있는지 확인 
    let cnt=1
    while(queue.length!=0){
        const cur=queue.shift()
        for(let i=0;i<4;i++){
            let nx=dx[i]+cur[0]
            let ny=dy[i]+cur[1]
            if(nx<0 || ny<0 || nx>=5 || ny>=5)continue
            if(queue_visited[nx][ny])continue
            if(check_visited[nx][ny]) { //상하좌우 움직였을떄 고른좌표면 
               queue_visited[nx][ny]=true
               queue.push([nx,ny])
               cnt+=1
            }
        }
    }
    if(cnt==7){
        return true
    }
    return false

}



dfs(0,0)
console.log(answer)