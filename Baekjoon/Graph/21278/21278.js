const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

const [n, m] = input[0].split(" ").map((n) => parseInt(n));
const graph = Array.from(new Array(n + 1), () => new Array());
const answer = [];

// 두개의 거리를 넣고 bfs를 돌리는데 왕복은 2이므로 *2
const bfs = (ch1, ch2) => {
  const queue = [];
  const visited = new Array(n + 1).fill(false);
  const dist = new Array(n + 1).fill(0);

  queue.push([ch1, 0]);
  queue.push([ch2, 0]);
  visited[ch1] = true;
  visited[ch2] = true;
  dist[ch1] = 0;
  dist[ch2] = 0;

  while (queue.length != 0) {
    const [cur, d] = queue.shift();
    if (dist[cur] === 0) {
      dist[cur] = d * 2;
    }
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (visited[next] === false) {
        visited[next] = true;
        queue.push([next, d + 1]);
      }
    }
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += dist[i];
  }
  answer.push([ch1, ch2, sum]);
};

for (let i = 1; i < input.length; i++) {
  const [n, m] = input[i].split(" ").map((k) => parseInt(k));
  graph[n].push(m);
  graph[m].push(n);
}

for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    bfs(i, j);
  }
}

answer.sort((a, b) => {
  if (a[2] < b[2]) {
    return -1;
  } else if (a[2] === b[2]) {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  }
});

console.log(`${answer[0][0]} ${answer[0][1]} ${answer[0][2]}`);
