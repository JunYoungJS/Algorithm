const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const [n,m]=input.shift().split(' ').map((n)=>+n)
const graph=Array.from(new Array(n+1),()=>new Array())
const indegree=new Array(n+1).fill(0)
for (let i = 0; i < m; i++){
    const [a, b] = input[i].split(' ').map((n) => +n)
    graph[a].push(b)
    indegree[b]+=1
}

const queue=[]
for (let i = 1; i <= n; i++){
    if (indegree[i] === 0) {
        queue.push(i)
    }
}
let result=[]
while (queue.length != 0) {
    const cur = queue.shift()
    result.push(cur)
    for (let i = 0; i < graph[cur].length; i++){
        const next = graph[cur][i]
        indegree[next] -= 1
        if (indegree[next] === 0) {
            queue.push(next)
        }
    }
}
let answer=""
result.forEach((n) => answer += `${n} `)
console.log(answer)