const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

let [n, m] = input[0].split(" ").map((n) => +n);
const graph = Array.from(new Array(n + 1), () => new Array());
const visited = new Array(n + 1).fill(false);
for (let i = 1; i <= n - 1; i++) {
  let [a, b, dist] = input[i].split(" ").map((n) => +n);
  graph[a].push([b, dist]);
  graph[b].push([a, dist]);
}
for (let i = n; i < input.length; i++) {
  let [start, end] = input[i].split(" ").map((n) => +n);
  cost = 0;
  dfs(start, end, 0);

  visited[start] = false;
  console.log(cost);
}

function dfs(start, end, money) {
  if (start === end) {
    cost = money;
    return;
  }
  visited[start] = true;
  for (let i = 0; i < graph[start].length; i++) {
    const [target, c] = graph[start][i];
    if (!visited[target]) {
      dfs(target, end, c + money);
      visited[target] = false;
    }
  }
  return;
}
