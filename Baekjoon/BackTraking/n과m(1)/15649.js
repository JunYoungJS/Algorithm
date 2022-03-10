const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync(__dirname+'/input.txt').toString().split(' ');
let n=+input[0]
let m=+input[1]
let answer=[]
const dfs=(depth)=>{
    if(depth==m){
        console.log(answer.join(' '))
        return 
    }

    for(let i=1;i<=n;i++){
        if(!answer.includes(i)){    
            answer.push(i)
            dfs(depth+1)
            answer.pop()
        }
    }

}

dfs(0)




