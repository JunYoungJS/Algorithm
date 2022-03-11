const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let answer=[]
let result=""

const dfs=(cur,numbers)=>{
    if(answer.length==6){
        result+=`${answer.join(" ")}\n`
        return
    }
    for(let i=cur;i<numbers.length;i++){
        answer.push(numbers[i])
        dfs(i+1,numbers)
        answer.pop()
    }
}



while(true){
    let tmp=input.shift()
    tmp=tmp.split(' ')
    let n=+tmp.shift()
    let numbers=tmp.map(e=>+e)
    answer=[]
    result=""
    if(n==0)break
    dfs(0,numbers)
    console.log(result)
    

}

