const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const n = +input.shift()
const graph = Array.from(new Array(n + 1), () => new Array())
const visited=new Array(n+1).fill(false)
const dp=Array.from(new Array(n+1),()=>new Array(2).fill(0))
for (let i = 0; i < input.length; i++){
  const [a, b] = input[i].split(' ').map((n) => +n)
  graph[a].push(b)
  graph[b].push(a)
}
dfs(1)
function dfs(cur) {
  visited[cur] = true
  // 현재 노드가 일반인 일떄  
  dp[cur][0] =1

  for (let i = 0; i < graph[cur].length; i++) {
    const child = graph[cur][i]
    if (!visited[child]) {
      dfs(child)
      //현재 노드가 일반인일떄  
      dp[cur][0] += Math.min(dp[child][0], dp[child][1])
      //현재 노드가 얼리어답터 ( 자식노드가 일반인 )
      dp[cur][1] += dp[child][0]

    }
  }

  return
}
console.log(Math.min(dp[1][0],dp[1][1]))