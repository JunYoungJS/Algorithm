const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

let n = +input.shift();
while (n != 0) {
  const s = input.shift();
  const k = +input.shift();
  let min_answer = Infinity;
  let max_answer = -Infinity;

  const alpha = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt() - 97;
    alpha[idx] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt() - 97;
    let cnt = 0;
    if (alpha[idx] < k) {
      continue;
    }
    for (let j = i; j < s.length; j++) {
      if (s[j] === s[i]) {
        cnt += 1;
      }
      if (cnt === k) {
        min_answer = Math.min(min_answer, j - i + 1);
        max_answer = Math.max(max_answer, j - i + 1);
        break;
      }
    }
  }
  if (min_answer === Infinity) {
    console.log(-1);
  } else {
    console.log(min_answer, max_answer);
  }
  n -= 1;
}
