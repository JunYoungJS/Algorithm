const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//let input = fs.readFileSync("input.txt").toString().split("\n");
let [n, m] = input[0].split(" ").map((n) => parseInt(n));
let number = input[1].split(" ").map((n) => parseInt(n));
number.unshift(0);

let dp = Array.from({ length: n + 1 }, () => 0);
let answer = [];

for (let i = 1; i < number.length; i++) {
  dp[i] = dp[i - 1] + number[i];
}

input.slice(2).forEach((testcase) => {
  const [i, j] = testcase.split(" ").map((n) => parseInt(n));
  answer.push(dp[j] - dp[i - 1]);
});

console.log(answer.join("\n"));
