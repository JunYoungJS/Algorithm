/**
 * @param {number} n
 * @return {string[][]}
 */
let answer = 0;
const check = (board, x, y) => {
  for (let i = 0; i < board.length; i++) {
    //      같은 열에 퀸 x
    if (board[i][y] === "Q") {
      return false;
    }
  }
  for (let i = 0; i < board.length; i++) {
    //      같은 행 에 퀸 x
    if (board[x][i] === "Q") {
      return false;
    }
  }
  //     대각선에 퀸 x

  let [x1, y1] = [x, y];
  let [x2, y2] = [x, y];
  while (x1 !== -1 && y1 !== -1) {
    if (board[x1][y1] === "Q") {
      return false;
    }
    x1 -= 1;
    y1 -= 1;
  }
  while (x2 !== -1 && y2 < board.length) {
    if (board[x2][y2] === "Q") {
      return false;
    }
    x2 -= 1;
    y2 += 1;
  }
  return true;
};
const backtraking = (depth, board) => {
  if (depth === board.length) {
    answer += 1;
    return;
  }

  for (let i = 0; i < board.length; i++) {
    if (board[depth][i] === "." && check(board, depth, i)) {
      board[depth][i] = "Q";
      backtraking(depth + 1, board);
      board[depth][i] = ".";
    }
  }
};
var totalNQueens = function (n) {
  const board = Array.from(new Array(n), () => new Array(n).fill("."));
  answer = 0;
  backtraking(0, board);
  return answer;
};
