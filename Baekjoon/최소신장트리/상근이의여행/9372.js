const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let t = +input.shift()
let a=0
let parent=[]
while (t != 0) {
  const [n, m] = input[a].split(' ').map((num) => +num)
  let answer = 0
  a+=1
  parent = new Array(n + 1).fill(0)
  for (let i = 0; i < parent.length; i++){
    parent[i]=i
  }
  for (let i=a; i <a+m; i++){
    const [z,x]=input[i].split(' ').map((n)=>+n)
    if (union(z, x)) {
      answer+=1  
    }

  }
  console.log(answer)    
  t -= 1
  a += m
}

function find(x) {
  if (parent[x] === x) {
      return x
  }
  return parent[x]=find(parent[x])
}
function union(x,y) {
  const parent_x=find(x)
  const parent_y = find(y)
  if (parent_x !== parent_y) {
    if (parent_x < parent_y) {
      parent[parent_y]=parent_x
    }
    else {
      parent[parent_x]=parent_y
    }
    return true
  }
  return false
}