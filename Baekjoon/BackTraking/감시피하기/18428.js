let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

n = +input.shift();
let answer = "NO";
let board = [];
let visited = Array.from(Array(n), () => Array(n).fill(false));
input.map((e) => board.push(e.split(" ")));

const dfs = (cnt) => {
  if (cnt == 3) {
    if (check_answer()) {
      answer = "YES";
      return true;
    }
    return false;
  } else {
    let flag = false;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] == "X" && !visited[i][j]) {
          visited[i][j] = true;
          board[i][j] = "O";
          flag = dfs(cnt + 1);
          visited[i][j] = false;
          board[i][j] = "X";
          if (flag) {
            return true;
          }
        }
      }
    }
  }
};

const check_answer = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == "T") {
        if (check_answer2(i, j)) {
          return false;
        }
      }
    }
  }
  return true;
};
const check_answer2 = (x, y) => {
  let tmp_x = x;
  let tmp_y = y;
  for (let i = 0; i < 4; i++) {
    x = tmp_x;
    y = tmp_y;
    while (true) {
      let nx = dx[i] + x;
      let ny = dy[i] + y;
      if (nx >= n || ny >= n || nx < 0 || ny < 0) break;

      if (board[nx][ny] == "O") {
        break;
      }

      if (board[nx][ny] == "S") {
        return true;
      }
      x = nx;
      y = ny;
    }
  }
  return false;
};
dfs(0);
console.log(answer);
