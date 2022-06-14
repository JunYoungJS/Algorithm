const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const [n, m] = input[0].split(" ").map((n) => +n);
const party = Array.from(new Array(m + 1), () => []);
const nodes = Array.from(new Array(n + 1), () => []);
const visited = new Array(m + 1);
input.shift();

let knowlist = input
  .shift()
  .split(" ")
  .map((n) => +n);

knowlist.shift();
const queue = [];
// 1. 진실을 아는 친구를 큐에 넣는다.
for (let i = 0; i < knowlist.length; i++) {
  queue.push(knowlist[i]);
}

// 2. party안에 어떤 노드들이 있는지 party,어떤노드가 파티에 속해있는지 만들어줌 nodes
for (let i = 0; i < input.length; i++) {
  const tmp = input[i].split(" ").map((a) => +a);
  tmp.shift();
  for (let j = 0; j < tmp.length; j++) {
    party[i + 1].push(tmp[j]);
    nodes[tmp[j]].push(i + 1);
  }
}

while (queue.length != 0) {
  const knowPeople = queue.shift();
  for (let i = 0; i < nodes[knowPeople].length; i++) {
    const nextParty = nodes[knowPeople][i]; // 해당파티는 진실을 알고있음
    if (!visited[nextParty]) {
      visited[nextParty] = true;
      // 해당 파티에 참석한 사람들은 진실을 알게되므로 큐에넣음
      for (let j = 0; j < party[nextParty].length; j++) {
        queue.push(party[nextParty][j]);
      }
    }
  }
}
let answer = 0;
for (let i = 1; i <= m; i++) {
  if (!visited[i]) {
    answer += 1;
  }
}
console.log(answer);
