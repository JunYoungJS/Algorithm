const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
input = input[0];
let start = 0;
let end = 0;
let alpha = {};
let d = new Set();
let answer = 0;

for (let i = 0; i < 26; i++) {
  const t = String.fromCharCode(i + 97);
  alpha[t] = 0;
}

while (start < input.length) {
  if (end === input.length) {
    alpha[input[start]] -= 1;
    if (alpha[input[start]] === 0) {
      d.delete(input[start]);
    }
    answer = Math.max(answer, end - start);
    start += 1;
    continue;
  }

  if (d.size > n) {
    answer = Math.max(answer, end - start);
    alpha[input[start]] -= 1;
    if (alpha[input[start]] === 0) {
      d.delete(input[start]);
    }
    start += 1;
    continue;
  }

  alpha[input[end]] += 1;
  d.add(input[end]);

  end += 1;
}

console.log(answer);
