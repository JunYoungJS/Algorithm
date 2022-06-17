const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((n) => +n);

const board = input.map((n) => n.split(" ").map((n) => +n));
let answer = Infinity;
for (let i = 0; i < m; i++) {
  answer = Math.min(calcost(0, i), answer);
}
console.log(answer);

function calcost(x, y) {
  const dx = [1, 1, 1];
  const dy = [-1, 0, 1];
  const queue = [];
  for (let i = 0; i < 3; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
      continue;
    }
    queue.push([nx, ny, i, board[x][y] + board[nx][ny]]);
  }
  let c = Infinity;
  while (queue.length != 0) {
    let [c_x, c_y, dir, cost] = queue.shift();
    if (c_x === n - 1) {
      c = Math.min(cost, c);
    }

    for (let i = 0; i < 3; i++) {
      const nx = dx[i] + c_x;
      const ny = dy[i] + c_y;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m || dir === i) {
        continue;
      }
      queue.push([nx, ny, i, cost + board[nx][ny]]);
    }
  }

  return c;
}
