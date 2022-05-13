const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

let [board_row, board_col, stickers] = input.shift().split(" ");
board_row = +board_row;
board_col = +board_col;
stickers = +stickers;
let board = Array.from(Array(board_row), () => Array(board_col).fill(0));
const isPossible = (x, y, sticker) => {
  // 스티커를 이동시키며 해당위치에 붙일수있는지 확인
  let sticker_row = sticker.length;
  let sticker_col = sticker[0].length;

  for (let i = 0; i < sticker_row; i++) {
    for (let j = 0; j < sticker_col; j++) {
      if (board[i + x][j + y] == 1 && sticker[i][j] == 1) {
        // 스티커를 붙이지 못하면
        return false;
      }
    }
  }

  //  스티커를 붙을수있는 상태가됨
  for (let i = 0; i < sticker_row; i++) {
    for (let j = 0; j < sticker_col; j++) {
      if (sticker[i][j] == 1) {
        board[i + x][j + y] = 1;
      }
    }
  }
  return true;
};

// 스티커를 90 회전시키는 함수
const sticker_rotate = (sticker) => {
  const sticker_row = sticker.length;
  const sticker_col = sticker[0].length;
  const new_sticker = Array.from(Array(sticker_col), () =>
    Array(sticker_row).fill(0)
  );

  // 90도 회전시 행과 열이 바뀜
  for (let i = 0; i < sticker_col; i++) {
    for (let j = 0; j < sticker_row; j++) {
      new_sticker[i][j] = sticker[sticker_row - 1 - j][i];
    }
  }

  return new_sticker;
};

while (stickers != 0) {
  // 1. 입력
  let [s_r, s_c] = input.shift().split(" ");
  s_c = +s_c;
  s_r = +s_r;
  let sticker = [];
  for (let i = 0; i < s_r; i++) {
    sticker.push(input.shift().split(" "));
  }

  // 2. 스티커를 이동시키며 붙일 수있는지 구하는 함수
  for (let rot = 0; rot < 4; rot++) {
    let flag = false;
    s_r = sticker.length;
    s_c = sticker[0].length;
    for (let i = 0; i <= board_row - s_r; i++) {
      for (let j = 0; j <= board_col - s_c; j++) {
        if (isPossible(i, j, sticker)) {
          flag = true;
          break;
        }
      }
      if (flag) break;
    }
    if (flag) break;
    sticker = sticker_rotate(sticker);
  }

  stickers -= 1;
}

// 정답
let answer = 0;
for (let i = 0; i < board_row; i++) {
  for (let j = 0; j < board_col; j++) {
    if (board[i][j] == 1) {
      answer += 1;
    }
  }
}
console.log(answer);
