const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
const n = +input.shift();
const rocks = input
  .shift()
  .split(" ")
  .map((n) => +n);

rocks.unshift(0);
left = 1;
right = 10000000;

let answer = Infinity;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (isValid(mid)) {
    answer = Math.min(answer, mid);
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
function isValid(cost) {
  const visited = new Array(n + 1);
  visited[1] = true;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      const c = (i - j) * (1 + Math.abs(rocks[i] - rocks[j]));
      if (visited[j] && c <= cost) {
        visited[i] = true;
        break;
      }
    }
  }
  if (visited[n]) {
    return true;
  } else {
    return false;
  }
}
