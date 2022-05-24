const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');
let answer=[0,0,0,0,0,0,0,0,0,0]
let number=1
for(let i=0;i<3;i++){
    number*=+input[i]
}
number=number+""
for(let i=0;i<number.length;i++){
    const idx=+number[i]
    answer[idx]+=1
}

console.log(answer.join('\n'))