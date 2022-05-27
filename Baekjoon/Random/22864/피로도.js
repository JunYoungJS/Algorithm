const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
//let input = fs.readFileSync("input.txt").toString().split(" ");
input = input.map((a) => parseInt(a));
let [a, b, c, m] = input;
let hour = 0;
let task = 0;
let myPiro = 0;
while (hour != 24) {
  if (myPiro + a <= m) {
    task += b;
    myPiro += a;
  } else {
    if (myPiro > 0) {
      myPiro -= c;
    }
    if (myPiro < 0) {
      myPiro = 0;
    }
  }
  hour += 1;
}

console.log(task);
