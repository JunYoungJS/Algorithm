const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");


const [n, k] = input.shift().split(' ').map((n) => +n)
const number=input.shift().split(' ').map((n)=>+n)
let answer=n

// 각 자리에 대한 등차수열을 구하는 코드
for (let num = 1; num <= 1000; num++){
    let cnt=0
    for (let i = 0; i < n; i++){
        if (num +i * k != number[i]) {
            cnt+=1
        }
    }
    answer=Math.min(answer,cnt)
}
console.log(answer)

 

