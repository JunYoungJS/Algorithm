const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");


const n = +input.shift()

const graph = []
const parent = new Array(n + 1)
for (let i = 1; i <= n + 1; i++){
    parent[i]=i
}
for (let i = 0; i < n; i++){
    const cost=+input.shift()
    graph.push([n+1,i+1,cost])
}
for (let i = 0; i < input.length; i++){
    const tmp = input[i].split(' ').map((n) => +n) 
    for (let j = 0; j < tmp.length; j++){
        if (i == j) {
            continue
        }
        graph.push([i+1,j+1,tmp[j]])
    }
}
graph.sort((a,b) => a[2] - b[2])
const find = (x) => {
    if (parent[x] === x) {
        return parent[x]
    }

    return parent[x]=find(parent[x])
}
const union = (a, b) => {
    const p1 = find(a)
    const p2 = find(b)
    if (p1 !== p2) {
        if (parent[p1] < parent[p2]) {
            parent[p2]=p1
        }
        else {
            parent[p1]=p2
        }
        return true
    }
    return false
}
let answer=0
for (let i = 0; i < graph.length; i++){
    const [a,b,c] = graph[i]
    if (union(a, b)) {
        answer+=c
    }
}
console.log(answer)