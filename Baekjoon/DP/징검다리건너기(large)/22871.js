const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
const n = +input.shift();
const rocks = input
  .shift()
  .split(" ")
  .map((n) => +n);

rocks.unshift(0);
const dp = new Array(5001).fill(-1);

for (let i = 2; i <= n; i++) {
  let value = Infinity;
  dp[i] = value;
  for (let j = 1; j < i; j++) {
    // i번에서 j번까지 이동하는데 드는 비용
    const cost = (i - j) * (1 + Math.abs(rocks[j] - rocks[i]));
    if (cost >= dp[j] && cost < value) {
      value = cost;
      dp[i] = Math.min(dp[i], value);
    }
  }
}

console.log(dp[n]);
