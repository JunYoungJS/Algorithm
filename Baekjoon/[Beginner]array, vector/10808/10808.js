const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString()
let answer=[]
//let input = fs.readFileSync('input.txt').toString()

for(let i=0;i<26;i++){
    answer.push(0)
}

for(let i=0;i<input.length;i++){
    let number=input.charCodeAt(i)-97
    answer[number]+=1
}
console.log(answer.join(" "))
