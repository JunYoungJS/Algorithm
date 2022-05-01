const fs = require("fs");
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("input.txt").toString().split("\n");
let n = parseInt(input[0]);
let dp = Array.from({ length: 1001 }, () => 0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
  dp[i] = dp[i] % 10007;
}

console.log(dp[n]);
