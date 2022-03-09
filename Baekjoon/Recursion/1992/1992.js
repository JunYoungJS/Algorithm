const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let answer=[]
let n=+input.shift()
let map=[]

for(let i=0;i<n;i++){
    let tmp=[]
    for(let j=0;j<n;j++){
        tmp.push(input[i][j])
    }
    map.push(tmp)
}

const quadtree=(n,cur_x,cur_y)=>{
    const value=map[cur_x][cur_y]
    let flag=false
    for(let i=cur_x;i<n+cur_x;i++){
        for(let j=cur_y;j<n+cur_y;j++){
            if(map[i][j]!=value){
                flag=true
                break
            }
        }
        if(flag)break
    }
    let size=Math.floor(n/2)
    if(flag){
        answer.push('(')
        quadtree(size,cur_x,cur_y)
        quadtree(size,cur_x,cur_y+size)
        quadtree(size,cur_x+size,cur_y)
        quadtree(size,cur_x+size,cur_y+size)
        answer.push(')')
    }
    else{
        answer.push(value)
    }

    
    return
}
quadtree(n,0,0)

console.log(answer.join(''))