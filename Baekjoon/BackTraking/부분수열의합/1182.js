const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let input_1=input[0].split(' ')
let newarray=input[1].split(' ')
let answer=[]
for(let i=0;i<newarray.length;i++){
    newarray[i]=+newarray[i]
}

let n=input_1[0];
let s=input_1[1]
let answer_cnt=0

const dfs=(depth,cur)=>{
    if(depth==n+1){
        return
    }
    else {
        let sum=0
        cnt+=1
        for(let i=0;i<answer.length;i++){
            sum+=newarray[answer[i]]
        }
        if(sum==+s){
            answer_cnt+=1
        }
    }

    for(let i=cur;i<newarray.length;i++){
        if(!answer.includes(i)){
            answer.push(i)
            dfs(depth+1,i+1)
            answer.pop()
        }
    }
}

dfs(0,0)
if(s==0){
    answer_cnt-=1
}

console.log(answer_cnt)