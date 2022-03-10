const fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let n=input.shift()
let stack=[]
let answer=[]
let cnt=1

for(let i=0;i<n;i++){
    const number=input[i]
    if(stack.length==0){
        stack.push(cnt)
        answer.push('+')
        cnt+=1
    }

    if(stack[stack.length-1]<number){  // 탑 값이 들어오는 숫자보다 작으면 같아질떄까지 푸쉬
        while(stack[stack.length-1]!=number){
            stack.push(cnt)
            answer.push('+')
            cnt+=1
        }
    }
    while(stack[stack.length-1]==number){
        stack.pop()
        answer.push('-')
    }
}

if(stack.length!=0){
    console.log('NO')
}
else{
    console.log(answer.join('\n'))
}