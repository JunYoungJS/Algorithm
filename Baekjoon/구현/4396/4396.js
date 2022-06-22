const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

const n = +input.shift();
input = input.map((n) => n.split(""));
const board = Array.from(new Array(n), () => new Array(n));
const myboard = Array.from(new Array(n), () => new Array(n));

for (let i = 0; i < n; i++) {
  board[i] = input.shift().map((n) => n);
}
for (let i = 0; i < n; i++) {
  myboard[i] = input.shift().map((n) => n);
}

let flag = false;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === "*" && myboard[i][j] === "x") {
      fillmine();
      flag = true;
      break;
    }
  }
  if (flag) break;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (myboard[i][j] === "x") {
      myboard[i][j] = checkAnswer(i, j);
    }
  }
}

function fillmine() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "*") {
        myboard[i][j] = "*";
      }
    }
  }
  return;
}

function checkAnswer(cur_x, cur_y) {
  const dx = [0, 0, -1, 1, 1, -1, 1, -1];
  const dy = [-1, 1, 0, 0, 1, -1, -1, 1];
  cnt = 0;
  for (let i = 0; i < 8; i++) {
    const nx = dx[i] + cur_x;
    const ny = dy[i] + cur_y;
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
      continue;
    }
    if (board[nx][ny] === "*") {
      cnt += 1;
    }
  }
  return cnt;
}
answer = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    answer += `${myboard[i][j]}`;
  }
  answer += `\n`;
}

console.log(answer);
