const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync("input.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map((n) => parseInt(n));
const numbers = input[1].split(" ").map((n) => parseInt(n));

let start = 0;
let end = start + 1;
let answer = 0;
const visited = {};
visited[numbers[start]] = 1;
while (start < numbers.length && end < numbers.length) {
  if (visited[numbers[end]] === undefined) {
    visited[numbers[end]] = 1;
    end += 1;
    continue;
  }

  if (visited[numbers[end]] + 1 <= k) {
    visited[numbers[end]] += 1;
    end += 1;
  } else {
    answer = Math.max(answer, end - start);
    visited[numbers[start]] -= 1;

    if (visited[numbers[start]] < 0) {
      visited[numbers[start]] = 0;
    }
    start += 1;
  }
}
answer = Math.max(answer, end - start);
console.log(answer);
