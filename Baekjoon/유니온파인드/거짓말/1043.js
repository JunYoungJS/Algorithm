const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const [n, m] = input[0].split(" ").map((n) => +n);
const parent = new Array(n + 1).fill(0)
input.shift();

let knowlist = input
  .shift()
  .split(" ")
  .map((n) => +n);

knowlist.shift();
let answer=0
// 1. 부모값 초기화
for (let i = 1; i <= n; i++){
    parent[i]=i
}

// 각파티의 노드들을 union 함 
for (let i = 0; i < input.length; i++) {
  const tmp = input[i].split(" ").map((a) => +a);
  for (let j = 1; j < tmp.length-1; j++) {
    union(tmp[j],tmp[j+1])
  }
}


for (let i = 0; i < input.length; i++) {
    const tmp = input[i].split(" ").map((a) => +a);
    var flag=false
    for (let j = 1; j < tmp.length; j++) {
        
        const node_parent=find_parent(tmp[j])
        for (let z = 0; z < knowlist.length; z++){
            // know의 부모와 파티의 노드의 부모가 같다면 서로 연결되어있는것이므로 정답에 추가를 못함    
            const know_parent = find_parent(knowlist[z])
            if (node_parent === know_parent) { //부모가 동일하면 
                flag = true
                break
            }
        }
        if (flag)
            break
    }
    if (!flag) {
        answer+=1
    }
}

console.log(answer)

function find_parent(x) {
    if (parent[x] === x) {
        return x
    }
    return find_parent(parent[x])
}

function find(x) {
    if (parent[x] === x) {
        return x
    }
    return parent[x]=find(parent[x])
}
function union(c_x, c_y) {
    let x = find(c_x)
    let y = find(c_y)

    if (x !== y) {
        if (x < y) {
            parent[y]=x
        }
        else {
            parent[x]=y
        }
    }
}


