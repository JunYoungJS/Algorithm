const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

input.shift();
let answer = new Set();
let alpha = [];

const dfs = (myWord, maxlength) => {
  if (maxlength === myWord.length) {
    answer.add(myWord);
    return;
  }

  for (let i = 0; i < 26; i++) {
    if (alpha[i] > 0) {
      alpha[i] -= 1;
      dfs(myWord + String.fromCharCode(i + 97), maxlength);
      alpha[i] += 1;
    }
  }

  return;
};

for (let i = 0; i < input.length; i++) {
  alpha = new Array(26).fill(0);
  for (let j = 0; j < input[i].length; j++) {
    const idx = input[i][j].charCodeAt(0) - 97;
    alpha[idx] += 1;
  }
  dfs("", input[i].length);
}

answer.forEach((w) => console.log(w));
