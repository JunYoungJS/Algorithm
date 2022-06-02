const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

let c = +input[0];
let answer = 0;
input.shift();

const dfs = (visited, board, idx, total) => {
  if (idx === 11) {
    answer = Math.max(answer, total);
    return;
  }

  for (let i = 0; i < board.length; i++) {
    if (visited[i] === false && board[idx][i] != 0) {
      visited[i] = true;
      dfs(visited, board, idx + 1, total + board[idx][i]);
      visited[i] = false;
    }
  }
  return;
};

while (c != 0) {
  const board = Array.from(new Array(11), () => new Array(11));
  const visited = new Array(11).fill(false);
  answer = 0;
  for (let i = 0; i < 11; i++) {
    board[i] = input
      .shift()
      .split(" ")
      .map((n) => parseInt(n));
  }
  dfs(visited, board, 0, 0);
  console.log(answer);
  c -= 1;
}
