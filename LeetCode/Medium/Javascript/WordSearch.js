/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let answer = false;
const dfs = (x, y, board, word, curword, visited) => {
  if (curword.length > word.length) {
    return false;
  }
  if (curword === word) {
    return true;
  }
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= board.length ||
      ny >= board[0].length ||
      visited[nx][ny]
    ) {
      continue;
    }
    visited[nx][ny] = true;
    if (dfs(nx, ny, board, word, curword + board[nx][ny], visited)) {
      return true;
    }
    visited[nx][ny] = false;
  }
  return false;
};

var exist = function (board, word) {
  answer = false;
  const visited = Array.from(new Array(board.length), () =>
    new Array(board[0].length).fill(false)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visited[i][j] = true;
      answer = dfs(i, j, board, word, board[i][j], visited);
      visited[i][j] = false;
      if (answer) {
        return true;
      }
    }
  }
  return false;
};

exist(
  [
    ["a", "b"],
    ["c", "d"],
  ],
  "abcd"
);
