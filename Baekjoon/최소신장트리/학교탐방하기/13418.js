const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");
  
const [n, m] = input.shift().split(' ').map((n) => +n)
const [a, b, c] = input.shift().split(' ').map((n) => +n)
let parent = new Array(n + 2).fill(0)
for (let i = 2; i <= n; i++){
    parent[i]=i
}

const graph = []


for (let i = 0; i < input.length; i++){
    const [q, w, e] = input[i].split(' ').map((n) => +n)
    graph.push([q,w,e])
}

graph.sort((a,b) =>  b[2] - a[2])
let min_value = 0
let max_value = 0
let cnt=0
for (let i = 0; i < graph.length; i++){
    const [z, x, cost] = graph[i]
    if (union(z, x)) {
        if (cost === 0) {
            cnt+=1
        }
    }    
}
if (c === 0) {
    cnt+=1
}

min_value = Math.pow(cnt, 2)
parent = new Array(n + 2).fill(0)


for (let i = 2; i <= n; i++){
    parent[i]=i
}
graph.sort((a, b) => a[2] - b[2])
cnt = 0
if (c === 0) {
    cnt+=1
}
for (let i = 0; i < graph.length; i++){
    const [z, x, cost] = graph[i]
    if (union(z, x)) {
        if (cost === 0) {
            cnt+=1
        }
    }    
}
max_value = Math.pow(cnt, 2)




function find(x) {
    if (parent[x] === x) {
        return x
    }
    return parent[x]=find(parent[x])
}

function union(a,b) {
    const p_a = find(a)
    const p_b=find(b)
    if (p_a !== p_b) {
        if (p_a < p_b) {
            parent[p_b]=p_a
        }
        else {
            parent[p_a]=p_b
        }
        return true
    }
    return false
}
console.log(max_value-min_value)