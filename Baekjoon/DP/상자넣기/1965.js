const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");
  
const n = +input.shift()
const boxes = input[0].split(' ').map((n)=>+n)
const dp = new Array(n).fill(0)
let answer=-Infinity
dp[0]=1
for (let i = 1; i < n; i++){
    dp[i]=1
    for (let j = i - 1; j >= 0; j--){
        if (boxes[i] > boxes[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        
        }
    }
}

for (let i = 0; i < n; i++){
    answer=Math.max(answer,dp[i])
}
console.log(answer)

