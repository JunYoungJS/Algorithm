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
  for (let i = 0; i < m; i++) {
    let [aNode, bNode] = input
      .shift()
      .split(" ")
      .map((n) => +n);
    graph[aNode].push(bNode);
    graph[bNode].push(aNode);
  }
  trees = 0;
  // 정점의개수 , 간선의개수 카운트 , dfs로 간선의개수 count
  for (let node = 1; node <= n; node++) {
    nodes = 0;
    vertex = 0;
    if (!visited[node]) {
      dfs(node);

      if ((nodes - 1) * 2 === vertex) {
        trees += 1;
      }
    }
  }
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
function dfs(start) {
  visited[start] = true;
  nodes += 1;
  vertex += graph[start].length;
  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (!visited[next]) {
      dfs(next);
    }
  }

  return;
}
