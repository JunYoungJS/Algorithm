const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let numbers=input[1].split(' ')
input[0]=input[0].split(' ')
let [n,m]=[+input[0][0],+input[0][1]]
numbers=numbers.map(number=>+number)
numbers.sort((a,b)=>a-b)
let answer=[]
let result=""

const dfs=(depth,cur)=>{
    if(depth==m){
       result+=`${answer.join(' ')}\n`
       return
    }

    for(let i=cur;i<numbers.length;i++){
        const number=numbers[i]
        answer.push(number)
        dfs(depth+1,i+1)
        answer.pop()
    }
        
}
dfs(0,0)
console.log(result.trim())