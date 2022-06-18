const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
let n = +input.shift();
let numbers = input
  .shift()
  .split(" ")
  .map((n) => +n);

let count = new Array(n).fill(0);
let cnt = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < numbers[i - 1]) {
    cnt += 1;
  }
  count[i] = cnt;
}
count[numbers.length - 1] = cnt;

let q = +input.shift();
let answer = "";
for (let i = 0; i < q; i++) {
  let [x, y] = input[i].split(" ").map((n) => +n);
  answer += `${count[y - 1] - count[x - 1]}\n`;
}

console.log(answer);
