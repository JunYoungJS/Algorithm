const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync(__dirname+'/input.txt').toString().split(' ');
let n=+input[0]
let m=+input[1]
let answer=[]

const dfs=(cur,depth)=>{
    if(depth==m){
        console.log(answer.join(' '))
        return
    }

    for(let i=cur;i<=n;i++){
        answer.push(i)
        dfs(i+1,depth+1)
        answer.pop(i)
    }
}

dfs(1,0)