const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");



const n = +input.shift()
const m = +input.shift()


const parent = new Array(n + 1).fill(0)
for (let i = 1; i <= n; i++){
    parent[i]=i
}

for (let i = 0; i < n; i++){
    const citylist = input[i].split(' ').map((n) => +n)
    for (let j = 0; j < citylist.length; j++){
        if (citylist[j] === 1) {
            union(i+1,j+1)
        }
    }
}
let flag=false
const targets = input[n].split(' ').map((n) => +n)
const p = parent[targets[0]]
for (let i = 1; i < targets.length; i++){
    if (p !== parent[targets[i]]) {
        flag = true
        break
    }
}
if (flag) {
    console.log("NO")
}
else {
    console.log("YES")
}

function find(x) {
    if (parent[x] === x) {
        return x
    }

    return parent[x]=find(parent[x])
}

function union(x, y) {
    let c_x = find(x)
    let c_y = find(y)
    if (c_x !== c_y) {
        if (c_x < c_y) {
            parent[c_y]=c_x
        }
        else {
            parent[c_x]=c_y
        }
    }
    return
}
