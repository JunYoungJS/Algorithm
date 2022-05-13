// 다시
const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, d, k, c] = input[0].split(" ").map((z) => +z);
const trays = input.slice(1, input.length).map((z) => +z);
const check = new Array(4000);
let answer = 0;
let end = 0;

for (let i = 0; i < k; i++) {
  trays.push(trays[i]);
}

for (let i = 0; i < n; i++) {
  while (!check[trays[end]] && end - i < k) {
    check[trays[end]] = 1;
    end += 1;
  }
  if (end - i === k && !check[c]) {
    answer = Math.max(answer, end - i + 1);
  }
  answer = Math.max(answer, end - i);
  check[trays[i]] = 0;
}

console.log(answer);
