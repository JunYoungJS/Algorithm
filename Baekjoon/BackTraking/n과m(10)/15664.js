const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let numbers=input[1].split(' ')
input[0]=input[0].split(' ')
let [n,m]=[+input[0][0],+input[0][1]]

numbers=numbers.map(number=>+number)
numbers.sort((a,b)=>a-b)

let visited=[]
let answer=[]
let result=""


for(let i=0;i<n;i++){
    visited.push(false)
}

const dfs=(depth,cur)=>{
    if(depth==m){
        result+=`${answer.join(' ')}\n`
        return
    }

    else{
        let tmp=0   
        for(let i=cur;i<numbers.length;i++){
            if(visited[i]==false && tmp!=numbers[i]){
                answer.push(numbers[i])
                visited[i]=true
                tmp=numbers[i]
                dfs(depth+1,i)
                visited[i]=false
                answer.pop()
            }
    }
    
}
}

dfs(0,0)
console.log(result)