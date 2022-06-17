const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

s = input.shift();
t = input.shift();
let answer = 0;
dfs(t);
function dfs(str) {
  if (str.length === s.length) {
    const tmp = str.join("");
    if (tmp === s) {
      answer = 1;
      return true;
    }
  }

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
    }
  }
  return false;
}
console.log(answer);
