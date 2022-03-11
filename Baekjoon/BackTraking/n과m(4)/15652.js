const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split(' ');
let n=+input[0]
let m=+input[1]
let result=''
let answer=[]

const dfs=(depth,cur)=>{
    if(depth==m){
        result+=`${answer.join(' ')}\n`
        return
    }

    for(let i=cur;i<=n;i++){
        answer.push(i)
        dfs(depth+1,i)
        answer.pop()
    }

}

dfs(0,1)
console.log(result.trim())