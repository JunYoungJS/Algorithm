const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

let [n, m] = input[0].split(" ").map((n) => +n);
let numbers = input[1].split(" ").map((n) => +n);
let end = 0;
let answer = Infinity;
let total = 0;
for (let i = 0; i < n; i++) {
  while (end < n && total < m) {
    total += numbers[end];
    end += 1;
  }
  if (total >= m) {
    answer = Math.min(answer, end - i);
    total -= numbers[i];
  }
}
if (answer === Infinity) {
  answer = 0;
}
console.log(answer);
