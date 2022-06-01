const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync("input.txt").toString().split("\n");

// 이동은
const [n, m, a, b, k] = input[0].split(" ").map((n) => parseInt(n));
const board = Array.from(new Array(n), () => new Array(m).fill(0));

for (let i = 1; i <= k; i++) {
  const [a, b] = input[i].split(" ").map((n) => parseInt(n));
  board[a - 1][b - 1] = 1;
}

let [startX, startY] = input[k + 1].split(" ").map((n) => parseInt(n));
let [endX, endY] = input[k + 2].split(" ").map((n) => parseInt(n));
const dist = Array.from(new Array(n), () => new Array(m).fill(-1));
startX -= 1;
startY -= 1;
endX -= 1;
endY -= 1;

const checkRange = (curX, curY) => {
  for (let i = curX; i < curX + a; i++) {
    for (let j = curY; j < curY + b; j++) {
      if (i < 0 || j < 0 || i >= n || j >= m) {
        return false;
      }
      if (board[i][j] === 1) {
        return false;
      }
    }
  }

  return true;
};
const bfs = (x, y) => {
  const queue = [[x, y]];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  dist[x][y] = 0;

  while (queue.length != 0) {
    const [curX, curY] = queue.shift();
    if (curX === endX && curY === endY) {
      return dist[curX][curY];
    }

    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [dx[i] + curX, dy[i] + curY];
      if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) {
        continue;
      }
      if (checkRange(nextX, nextY) && dist[nextX][nextY] === -1) {
        dist[nextX][nextY] = dist[curX][curY] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }
  return -1;
};
console.log(bfs(startX, startY));
