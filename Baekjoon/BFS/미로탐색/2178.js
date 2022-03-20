const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let [n,m]=input.shift().split(' ')
n=+n
m=+m

const map=[]
let dist=Array.from(Array(+n),()=>Array(+m).fill(0))
input.map((e)=>map.push(e.split('')))

const bfs=()=>{
    let queue=[]
    queue.push([0,0])
    dist[0][0]=1

    while(queue.length!=0){
        const [cur_x,cur_y]=queue.shift()

        for(let i=0;i<4;i++){
            let nx=cur_x+dx[i]
            let ny=cur_y+dy[i]

            if(nx<0 || ny<0 || nx>=n || ny>=m)continue
            if(dist[nx][ny]!=0 || map[nx][ny]==0)continue
            dist[nx][ny]=dist[cur_x][cur_y]+1
            queue.push([nx,ny])
        }

    }

    console.log(dist[n-1][m-1])



}
bfs()