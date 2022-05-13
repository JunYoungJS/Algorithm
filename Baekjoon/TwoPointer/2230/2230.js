const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0x7fffffff;
let [n, m] = input[0].split(" ").map((n) => +n);
const numbers = input
  .splice(1, input.length)
  .map((n) => +n)
  .sort((a, b) => a - b);

let start = 0;
for (let i = 0; i < n; i++) {
  if (start == n) break;
  while (start < n) {
    const total = numbers[start] - numbers[i];
    if (total >= m) {
      answer = Math.min(total, answer);
      break;
    } else {
      start += 1;
    }
  }
}
console.log(answer);
