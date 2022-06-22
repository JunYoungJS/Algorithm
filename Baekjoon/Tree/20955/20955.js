const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input
  .shift()
  .split(" ")
  .map((n) => +n);
const graph = Array.from(new Array(n + 1), () => new Array());
const visited = new Array(n + 1).fill(false);
const finished = new Array(n + 1).fill(false);

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map((n) => +n);
  graph[a].push(b);
  graph[b].push(a);
}
cycle = 0;
let trees = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i, visited, finished, 0);
    trees += 1;
  }
}

function dfs(cur, visited, finished, prev) {
  visited[cur] = true;
  for (let i = 0; i < graph[cur].length; i++) {
    const next = graph[cur][i];
    if (!visited[next]) {
      dfs(next, visited, finished, cur);
    } else if (visited[next] && !finished[next] && prev != next) {
      cycle += 1;
    }
  }
  finished[cur] = true;

  return;
}
console.log(trees - 1 + cycle);
