const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

let answer = "";
let c = 1;
while (input.length != 0) {
  let [n, m] = input
    .shift()
    .split(" ")
    .map((n) => +n);
  if (n === 0 && m === 0) {
    break;
  }

  var graph = Array.from(new Array(n + 1), () => new Array());
  var visited = new Array(n + 1).fill(false);
  var finished = new Array(n + 1).fill(false);
  for (let i = 0; i < m; i++) {
    let [aNode, bNode] = input
      .shift()
      .split(" ")
      .map((n) => +n);
    graph[aNode].push(bNode);
    graph[bNode].push(aNode);
  }
  trees = 0;
  cycles = 0;
  for (let node = 1; node <= n; node++) {
    if (!visited[node]) {
      dfs(node);
      trees += 1;
    }
  }
  trees = trees - cycles;
  if (trees > 1) {
    answer += `Case ${c}: A forest of ${trees} trees.\n`;
  } else if (trees === 1) {
    answer += `Case ${c}: There is one tree.\n`;
  } else {
    answer += `Case ${c}: No trees.\n`;
  }
  c += 1;
}
console.log(answer);
function dfs(cur, prev) {
  visited[cur] = true;
  for (let i = 0; i < graph[cur].length; i++) {
    const next = graph[cur][i];
    if (!visited[next]) {
      dfs(next, cur);
    } else if (visited[next] && !finished[next] && next !== prev) {
      cycles += 1;
    }
  }
  finished[cur] = true;
  return;
}
