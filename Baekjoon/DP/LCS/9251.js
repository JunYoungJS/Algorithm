const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync("input.txt").toString().split("\n");
let [a, b] = [input[0].trim(), input[1].trim()];

const a_length = a.length;
const b_length = b.length;
const dp = Array.from(new Array(2001), () => new Array(2001).fill(0));

for (let i = 1; i <= a_length; i++) {
  for (let j = 1; j <= b_length; j++) {
    if (a[i - 1] === b[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

console.log(dp[a_length][b_length]);
