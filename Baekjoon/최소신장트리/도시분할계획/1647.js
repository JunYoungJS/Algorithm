const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");


const [n, m] = input.shift().split(' ').map((n) => +n)
const graph=[]
const parent = new Array(n + 1).fill(0)
for (let i = 0; i < parent.length; i++){
    parent[i]=i
}

for (let i = 0; i < input.length; i++){
    const [a, b, c] = input[i].split(' ').map((n) => +n)
    graph.push([a,b,c])
}
graph.sort((a, b) => a[2] - b[2])
let answer = 0
let max_value=-Infinity
for (let i = 0; i < graph.length; i++){
  const [a, b, c] = graph[i]
  if (union(a, b)) {
    max_value=Math.max(max_value,c)
    answer += c
  }
}
console.log(answer-max_value)

function find(x) {
  if (parent[x] === x) {
    return x
  }
  return parent[x]=find(parent[x])
}

function union(a, b) {
  const parent_a = find(a)
  const parent_b=find(b)
  if (parent_a !== parent_b) {
    if (parent_a < parent_b) {
      parent[parent_b]=parent_a
    }
    else {
      parent[parent_a]=parent_b
    }
    return true
  }
  return false
}