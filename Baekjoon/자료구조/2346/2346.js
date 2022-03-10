// 메모리 초과
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let input = fs.readFileSync('input.txt').toString().split('\n');
let n=+input[0]
let arr=input[1].split(' ')
let newarr=[]
let answer=[]
for(const i in arr){
    newarr.push([+i+1,arr[i]])
}


while (answer.length!=n){
    let tmp=newarr.shift()
    answer.push(tmp)
    let idx=tmp[0]
    let num=+tmp[1]

    if(num<0){
        num*=-1
        for(let i=0;i<num;i++){
            newarr.unshift(newarr.pop())
        }
    }
    else{
        for(let i=0;i<num-1;i++){
            newarr.push(newarr.shift())
        }
    }
}
for(const i in answer){
    process.stdout.write(answer[i][0]+" ")
}