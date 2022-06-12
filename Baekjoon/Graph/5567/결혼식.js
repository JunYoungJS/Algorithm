const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const [n, m] = [+input[0], +input[1]];
const friends = input.slice(2, input.length);
const graph = Array.from(new Array(n + 1), () => new Array());
const visited = new Array(n + 1).fill(-1);
for (let i = 0; i < friends.length; i++) {
  const [a, b] = friends[i].split(" ").map((n) => +n);
  graph[a].push(b);
  graph[b].push(a);
}

const bfs = (start) => {
  visited[start] = 0;
  let queue = [];
  queue.push(start);

  while (queue.length !== 0) {
    let cur = queue.shift();
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (visited[next] === -1) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  return;
};

let answer = 0;
bfs(1);
for (let i = 0; i < visited.length; i++) {
  if (i === 1) {
    continue;
  } else {
    if (visited[i] > 0 && visited[i] <= 2) {
      answer += 1;
    }
  }
}
console.log(answer);
