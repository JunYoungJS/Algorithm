const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");
  
const n = +input.shift()
const parent = new Array(n + 1).fill(0)
const graphs=[]
for (let i = 1; i <= n; i++){
  parent[i]=i
}

for (let i = 0; i < input.length; i++){
    const tmp = input[i].split(' ').map((n) => +n)
  for (let j = 0; j < tmp.length; j++){
        if(i+1===j+1)continue
        graphs.push([i+1,j+1,tmp[j]])
    }    
}

graphs.sort((a, b) => a[2] - b[2])
let answer=0
for (let i = 0; i < graphs.length; i++){
  if (union(graphs[i][0], graphs[i][1])) {
    answer+=graphs[i][2]
  }
}
console.log(answer)

function union(a, b) {
  const parnet_a = find(a)
  const parnet_b = find(b)
  
  if (parnet_a !== parnet_b) {
    if (parnet_a < parnet_b) {
      parent[parnet_b] = parnet_a
    }
    else {
      parent[parnet_a]=parnet_b
    }
    return true
  }

  return false
}
function find(x) {
  if (parent[x] === x) {
    return x
  }
  return parent[x]=find(parent[x])
}