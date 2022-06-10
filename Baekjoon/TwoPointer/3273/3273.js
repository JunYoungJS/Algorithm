const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync("input.txt").toString().split("\n");

const numbers = input[1].split(" ").map((a) => +a);
const k = +input[2];
numbers.sort((a, b) => a - b);
let start = 0;
let end = numbers.length - 1;
let answer = 0;
while (start < end) {
  if (numbers[start] + numbers[end] === k) {
    answer += 1;
    start += 1;
    end -= 1;
  } else if (numbers[start] + numbers[end] < k) {
    start += 1;
  } else {
    end -= 1;
  }
}
console.log(answer);
