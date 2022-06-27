const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");


const [n, m] = input.shift().split(' ').map((n) => +n)
const board = new Array(n)

const dp=Array.from(new Array(n),()=>new Array(m).fill(0))
for (let i = 0; i < n; i++){
    board[i] = input.shift().split(' ').map((n)=>+n)
}

dp[0][0]=board[0][0]

for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
        if (j - 1 >= 0 && board[i][j]===1)  {
            dp[i][j]=Math.max(dp[i][j],dp[i][j-1]+1)
        }        
        
        if (i - 1 >= 0 && board[i][j]===1) {
            dp[i][j]=Math.max(dp[i][j],dp[i-1][j]+1)
        }

        if (j - 1 >= 0 && board[i][j]===0)  {
            dp[i][j]=Math.max(dp[i][j],dp[i][j-1])
        }        
        
        if (i - 1 >= 0 && board[i][j]===0) {
            dp[i][j]=Math.max(dp[i][j],dp[i-1][j])
        }
    }
}

console.log(dp[n-1][m-1])