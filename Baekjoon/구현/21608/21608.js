const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//let input = fs.readFileSync("input.txt").toString().split("\n");
const n = +input[0];
const check = Array.from(new Array(n), () => new Array(n).fill(0));
const board = input
  .slice(1, input.length)
  .map((n) => n.split(" ").map((m) => +m));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const check1 = (myNumber, myfriends) => {
  // 1.비어있는 칸중 좋아하는 학생이 인접한칸에 가장 많은지 확인
  const emptyList = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (check[i][j] === 0) {
        emptyList.push([i, j]);
      }
    }
  }
  // 비어있는 칸 구함

  // 비어있는 칸중 좋아하는 학생이 인접한칸에 가장 많은칸 (상하좌우)
  const myFList = [];
  emptyList.forEach((s) => {
    let cnt = 0;
    let empty = 0;
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + s[0];
      const ny = dy[i] + s[1];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
        continue;
      }
      if (myfriends.includes(check[nx][ny])) {
        cnt += 1;
      }
      if (check[nx][ny] === 0) {
        empty += 1;
      }
    }
    myFList.push([cnt, empty, s]);
    // 현재좌표 , 친한친구수, 비어있는칸수
  });

  // 아래에 맞게 정렬시키면됨
  // 1. 비어있는 칸 중에서 좋아하는 학생이 인접한 칸에 가장 많은 칸으로 자리를 정한다.
  // 2. 1을 만족하는 칸이 여러 개이면, 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로 자리를 정한다.
  // 3. 2를 만족하는 칸도 여러 개인 경우에는 행의 번호가 가장 작은 칸으로, 그러한 칸도 여러 개이면 열의 번호가 가장 작은 칸으로 자리를 정한다.
  myFList.sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[2][0] > b[2][0]) {
      return 1;
    }
    if (a[2][0] < b[2][0]) {
      return -1;
    }
    if (a[2][1] > b[2][1]) {
      return 1;
    }
    if (a[2][1] < b[2][1]) {
      return -1;
    }
  });

  const c_x = myFList[0][2][0];
  const c_y = myFList[0][2][1];
  check[c_x][c_y] = myNumber;
  return;
};

const checkFriends = {};
while (board.length != 0) {
  const tmp = board.shift();
  const myNumber = tmp.shift();
  const myfriends = tmp;
  checkFriends[myNumber] = [...myfriends];
  check1(myNumber, myfriends);
}
const findScore = (myNumber) => {
  let [x, y] = [0, 0];
  for (let i = 0; i < n; i++) {
    let flag = false;
    for (let j = 0; j < n; j++) {
      if (check[i][j] === myNumber) {
        x = i;
        y = j;
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  let cnt = 0;
  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
      continue;
    }
    const findList = checkFriends[myNumber];
    const mfriend = check[nx][ny];
    if (findList.includes(mfriend)) {
      cnt += 1;
    }
  }
  let total = 0;
  if (cnt === 1) {
    total = 1;
  } else if (cnt === 2) {
    total = 10;
  } else if (cnt === 3) {
    total = 100;
  } else if (cnt === 4) {
    total = 1000;
  }

  return total;
};
let answer = 0;
for (let i = 1; i <= Math.pow(n, 2); i++) {
  answer += findScore(i);
}
console.log(answer);
