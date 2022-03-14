const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let [r,c,k]=input.shift().split(' ')
let dx=[0,0,1,-1]
let dy=[1,-1,0,0]

let answer=0
let map=[]
let visited=[]

for(let i=0;i<r;i++){
    map.push(input.shift().split(''))
}
for(let i=0;i<r;i++){
    let tmp=[]
    for(let j=0;j<c;j++){
        tmp.push(false)
    }
    visited.push(tmp)
}



k=+k
const dfs=(cur_x,cur_y,distance)=>{
    if(distance==k && cur_x==0 && cur_y==c-1){
        answer+=1
        return
    }

    
    for(let i=0;i<4;i++){
        let nx=dx[i]+cur_x
        let ny=dy[i]+cur_y
        if(nx<0 ||ny<0 || nx>=r || ny>=c || visited[nx][ny])continue        
        if(map[nx][ny]=='T')continue
        visited[nx][ny]=true
        dfs(nx,ny,distance+1)
        visited[nx][ny]=false
    }
}

visited[r-1][0]=true
dfs(r-1,0,1)

console.log(answer)