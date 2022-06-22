const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

let [n, m] = input
  .shift()
  .split(" ")
  .map((n) => +n);
var cost = new Array(n + 1).fill(0);
var visited = new Array(n + 1).fill(false);
var answer = new Array(n + 1).fill(0);
const relation = input
  .shift()
  .split(" ")
  .map((n) => +n);

relation.unshift(0);
var graph = Array.from(new Array(n + 1), () => new Array());
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    continue;
  }
  graph[relation[i]].push(i);
}
for (let i = 0; i < m; i++) {
  let [t, c] = input[i].split(" ").map((n) => +n);
  cost[t] += c;
}
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i, cost[i]);
  }
}

function dfs(start, total) {
  visited[start] = true;
  answer[start] = total;
  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (!visited[next]) {
      dfs(next, total + cost[next]);
    }
  }
  return;
}
let ans = "";
for (let i = 1; i < answer.length; i++) {
  ans += `${answer[i]}`;
  ans += " ";
}
console.log(ans);
