const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim();
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("");

let answer = new Set();
let remove_pair = [];
let stack = [];
let visited = new Array(input.length).fill(0);

// 1. 괄호를 제거 할수 있는 조합을 구함
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push(i);
  } else if (input[i] === ")") {
    remove_pair.push([stack.pop(), i]);
  }
}

// 2. 제거할수있는 조합을 가지고 완전탐색 해서 조합 완성시킴
// 길이가 1일떄의조합 길이가 2일떄의조합 길이가 3일떄의 조합식으로 다돌림
const dfs = (idx, cnt) => {
  if (idx == remove_pair.length) {
    if (cnt == 0) {
      return;
    }

    let tmp = "";
    for (let i = 0; i < visited.length; i++) {
      if (!visited[i]) {
        tmp += input[i];
      }
    }
    answer.add(tmp);
    return;
  }

  let [start, end] = remove_pair[idx];
  // 선택 x
  dfs(idx + 1, cnt);
  visited[start] = true;
  visited[end] = true;
  // 선택 o
  dfs(idx + 1, cnt + 1);
  visited[start] = false;
  visited[end] = false;
};

dfs(0, 0);

[...answer].sort().forEach((e) => console.log(e));
