const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

input = input.shift().split('')
let answer=0
const visited = new Array(input.length).fill(false)
let order=['q','u','a','c','k']
for (let i = 0; i < input.length; i++){
    let start = i
    let idx=0
    let tmp = ""
    let check=[]
    while (start < input.length) {
        if (tmp === 'quack') {
            check.push(tmp)
            tmp = ""
            continue
        }
        if (input[start] === order[idx] && !visited[start]) {
            visited[start] = true
            tmp += order[idx]       
            idx = (idx + 1) % 5
        }
        start+=1
    }
    if (check.length!=0 || tmp==='quack') {
        answer+=1
    }
}


for (let i = 0; i < visited.length; i++){
    if (!visited[i]) {
        answer = -1
        break
    }
}

if (input.length % 5 != 0 || answer===0) {
    answer=-1
}
console.log(answer)