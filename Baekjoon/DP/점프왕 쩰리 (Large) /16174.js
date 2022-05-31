const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync("input.txt").toString().split("\n");
const n = parseInt(input[0]);
let board = input.slice(1, input.length);
board = board.map((n) => n.split(" ").map((m) => parseInt(m)));
const dp = Array.from(new Array(n), () => new Array(n).fill(0));

dp[0][0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == n - 1 && j == n - 1) {
      continue;
    }
    if (dp[i][j] === 1) {
      const down = i + board[i][j];
      const right = j + board[i][j];
      if (down < n) {
        dp[down][j] = 1;
      }
      if (right < n) {
        dp[i][right] = 1;
      }
    }
  }
}
if (dp[n - 1][n - 1] === 1) {
  console.log("HaruHaru");
} else {
  console.log("Hing");
}
