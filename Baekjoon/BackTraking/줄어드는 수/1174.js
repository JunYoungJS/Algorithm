const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

const n = +input[0];
let answer = new Set();

const dfs = (number) => {
  if (number.length != 0) {
    const t = number.join("");
    answer.add(t);
  }
  for (let i = 0; i <= 9; i++) {
    if (number.length === 0 || parseInt(number[number.length - 1]) > i) {
      number.push(i + "");
      dfs(number);
      number.pop();
    }
  }
};
dfs([]);
answer = [...answer].map((n) => +n).sort((a, b) => a - b);
if (answer[n - 1] === undefined) {
  console.log(-1);
} else {
  console.log(answer[n - 1]);
}
