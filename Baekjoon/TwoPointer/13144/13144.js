const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const n = +input[0];
const numbers = input[1].split(" ").map((num) => +num);
const visited = new Array(1000001);

let end = 0;
let answer = 0;

for (let i = 0; i < n; i++) {
  while (end < n) {
    if (visited[numbers[end]]) break;
    visited[numbers[end]] = 1;
    end += 1;
  }
  visited[numbers[i]] = 0;
  answer += end - i;
}

console.log(answer);
