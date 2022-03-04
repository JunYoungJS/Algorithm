const calCulator=(a,b,op)=>{
    if(op=='*'){
        return a*b
    }
    else if(op=='-'){
        return a-b
    }
    else if(op=='/'){
        return a/b
    }
    else{
        return a+b
   }

}

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');
const numberlength=input.shift()
const tmp=input.shift()
const expression=[]
const newnumber=[]
let stack=[]



// 1. 파싱부분 코드 
for(const i in input){
    newnumber.push(+input[i])
}

for(const i in tmp){
    let a=tmp[i].charCodeAt(0)-65
    if(a>=0){
        expression.push(newnumber[a])
    }
    else{
        expression.push(tmp[i])
    }
}

// 2. 본코드


    for(let i=0;i<expression.length;i++){
        let tmp=expression[i]
        if(!isNaN(tmp)){ // 1.숫자면 푸쉬
            stack.push(tmp)
        }
        else{ 
            let a=stack.pop()
            let b=stack.pop()
            stack.push(calCulator(b,a,tmp))
        }

    }
    let answer=stack[0]
    console.log(answer.toFixed(2))