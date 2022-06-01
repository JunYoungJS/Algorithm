const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("input.txt").toString().split("\n");
const n = +input[0];
const juices = input.slice(1, input.length).map((n) => +n);
const dp = new Array(10002).fill(0);
dp[0] = juices[0];

if (n == 2) {
  dp[1] = juices[0] + juices[1];
}

if (n >= 3) {
  dp[1] = juices[0] + juices[1];
  dp[2] = Math.max(juices[2] + dp[0], dp[1]);
  dp[2] = Math.max(juices[2] + juices[1], dp[2]);
}
for (let i = 3; i < juices.length; i++) {
  dp[i] = Math.max(juices[i] + juices[i - 1] + dp[i - 3], dp[i - 1]);
  dp[i] = Math.max(dp[i - 2] + juices[i], dp[i]);
}

console.log(dp[n - 1]);
