const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

let min_answer = Infinity;
let max_answer = -Infinity;
const s = (one, two, three) => {
  one = +one.join("");
  two = +two.join("");
  three = +three.join("");

  return (one + two + three).toString();
};
const dfs = (number, cnt) => {
  number = [...number];
  if (number.length === 1) {
    let c = cnt;
    if (+number[0] % 2 === 1) {
      c += 1;
    }
    max_answer = Math.max(max_answer, c);
    min_answer = Math.min(min_answer, c);

    return;
  } else if (number.length === 2) {
    let sum = 0;
    let c = cnt;
    for (let i = 0; i < number.length; i++) {
      if (+number[i] % 2 === 1) {
        c += 1;
      }

      sum += +number[i];
    }
    dfs(sum.toString(), c);
  } else {
    for (let i = 0; i < number.length - 2; i++) {
      for (let j = i + 1; j < number.length - 1; j++) {
        let c = cnt;
        let one = number.slice(0, i + 1);
        let two = number.slice(i + 1, j + 1);
        let three = number.slice(j + 1, number.length);

        let newNumber = s(one, two, three);
        for (let z = 0; z < number.length; z++) {
          if (+number[z] % 2 === 1) {
            c += 1;
          }
        }

        dfs(newNumber, c);
      }
    }
  }
};
dfs(input[0], 0);
console.log(min_answer, max_answer);
