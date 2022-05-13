const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

let n = +input[0];
input = input.slice(1, input.length);
let graph = new Array(11).fill([]);
let answer = 0;

const bfs = (cur) => {
  let queue = [cur];
  let visited = new Array(n + 1).fill(-1);
  visited[cur] = 0;

  while (queue.length != 0) {
    const c = queue.shift();
    for (let i = 0; i < graph[c].length; i++) {
      const next = graph[c][i];
      if (visited[next] === -1) {
        visited[next] = visited[c] + 1;
        queue.push(next);
      }
    }
  }
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (visited[i] >= 1 && visited[i] <= 2) {
      cnt += 1;
    }
  }
  answer = Math.max(cnt, answer);
};

for (let i = 0; i < input.length; i++) {
  let tmp = [];
  let array = input[i].split("");
  for (let j = 0; j < array.length; j++) {
    if (array[j] === "Y") {
      tmp.push(j + 1);
    }
  }
  graph[i + 1] = tmp;
}

for (let i = 1; i <= n; i++) {
  bfs(i);
}
console.log(answer);
