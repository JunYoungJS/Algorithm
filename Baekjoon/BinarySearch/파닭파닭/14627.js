const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

let [s, c] = input[0].split(" ").map((a) => +a);

const chikens = input.slice(1, input.length).map((a) => +a);
chikens.sort((a, b) => a - b);
let left = 1;
let right = Math.max(...chikens);
let answer = 0;

const binarySearh = (amount) => {
  let cnt = 0;
  for (let i = 0; i < chikens.length; i++) {
    cnt += Math.floor(chikens[i] / amount);
  }

  if (cnt >= c) {
    return 1;
  }
  return 0;
};

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (binarySearh(mid)) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
let ch = 0;
for (let i = 0; i < chikens.length; i++) {
  ch += chikens[i];
}
answer = ch - c * answer;
console.log(answer);
