const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map((q) => +q);
const numbers = input[1].split(" ").map((q) => +q);
let answer = 0;
let start = 0;
let total = 0;
for (let i = 0; i < n; i++) {
  while (start < n && total < m) {
    total += numbers[start];
    start += 1;
  }
  if (total === m) {
    answer += 1;
    total -= numbers[i];
  } else {
    total -= numbers[i];
  }
}
console.log(answer);
