const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const n = +input[0];
const files = input.slice(1, input.length);
let answers = new Map();
for (let i = 0; i < files.length; i++) {
  const [fileName, file] = files[i].split(".");
  if (!answers.has(file)) {
    answers.set(file, 1);
  } else {
    answers.set(file, answers.get(file) + 1);
  }
}
answers = [...answers];

answers.sort();
let answer = "";
answers.forEach((a) => (answer += `${a[0]} ${a[1]} \n`));
console.log(answer);
