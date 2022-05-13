class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let node = this.first;
    if (this.first == this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return node.value;
  }

  length() {
    return this.size;
  }
}
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
let [n, m] = input[0].split(" ").map((k) => +k);
input = input.slice(1, input.length);
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let map = new Array(n);
let visited = Array.from(Array(n), () => Array(m).fill(0));
let color = 1;
let colors = new Map();
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const tmp = input[i].split(" ");
  map[i] = [...tmp];
}

const bfs = (x, y) => {
  let queue = new Queue();
  queue.enqueue(new Node([x, y]));
  let check = [[x, y]];
  visited[x][y] = color;
  while (queue.length() != 0) {
    const [curX, curY] = queue.dequeue().value;
    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [curX + dx[i], curY + dy[i]];
      if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;
      if (!visited[nextX][nextY] && map[nextX][nextY] === "1") {
        visited[nextX][nextY] = color;
        queue.enqueue(new Node([nextX, nextY]));
        check.push([nextX, nextY]);
      }
    }
  }
  let cnt = check.length;
  colors.set(color, cnt);
  return;
};
const findAnswer = (x, y) => {
  let total = 0;
  let set = new Set();
  for (let i = 0; i < 4; i++) {
    let [nextX, nextY] = [dx[i] + x, dy[i] + y];
    if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;
    if (map[nextX][nextY] === "1") {
      set.add(visited[nextX][nextY]);
    }
  }
  set = [...set];
  for (let i = 0; i < set.length; i++) {
    total += colors.get(set[i]);
  }
  return total;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === "1" && !visited[i][j]) {
      bfs(i, j);
      color += 1;
    }
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === "0") {
      answer = Math.max(answer, findAnswer(i, j) + 1);
    }
  }
}

console.log(answer);
