const fs = require("fs");
const { exit } = require("process");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

let [r, c] = input
  .shift()
  .split(" ")
  .map((n) => +n);
let board = input.slice(0, input.length);
board = board.map((a) => a.split(""));
const dist = Array.from(new Array(r), () => new Array(c).fill(-1));
const queue = [];

// 1. 물을 먼저 넣음
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (board[i][j] === "*") {
      queue.push([i, j, "*"]);
      dist[i][j] = 0;
    }
  }
}
// 2. 그다음 고슴도치넣음
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (board[i][j] === "S") {
      queue.push([i, j, "S"]);
      dist[i][j] = 0;
    }
  }
}
let answer = 0;
answer = bfs();
console.log(answer);
function bfs() {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  while (queue.length) {
    const [c_x, c_y, w] = queue.shift();
    if (board[c_x][c_y] === "D" && w === "S") {
      return dist[c_x][c_y];
    }
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + c_x;
      const ny = dy[i] + c_y;

      if (nx < 0 || ny < 0 || nx >= r || ny >= c) {
        continue;
      }
      if (dist[nx][ny] === -1) {
        if (w === "S" && board[nx][ny] === "D") {
          dist[nx][ny] = dist[c_x][c_y] + 1;
          queue.push([nx, ny, w]);
        } else if (board[nx][ny] === ".") {
          dist[nx][ny] = dist[c_x][c_y] + 1;
          queue.push([nx, ny, w]);
        }
      } else if (dist[nx][ny] > dist[c_x][c_y] + 1 && board[nx][ny] === ".") {
        dist[nx][ny] = dist[c_x][c_y] + 1;
        queue.push([nx, ny, w]);
      }
    }
  }
  return "KAKTUS";
}
