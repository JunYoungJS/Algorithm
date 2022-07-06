const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

const [v, e] = input.shift().split(' ').map((n) => +n)
const parent=new Array(v+1).fill(0)
const graphs = []

for (let i = 1; i <= v; i++){
    parent[i]=i
}

const find = (x) => {
    if (parent[x] === x) {
        return x
    }
    return parent[x]=find(parent[x])
}

const union = (x, y) => {
    let c_x = find(x)
    let c_y = find(y)
    if (c_x !== c_y) {
        if (parent[c_x] === parent[c_y]) {
            parent[c_x]-=1
        }   
        if (parent[c_x] < parent[c_y]) {
            parent[c_y]=c_x
        }
        else {
            parent[c_x]=c_y
        }


        return true
    }
    return false
}

for (let i = 0; i < input.length; i++){
    const [a, b, c] = input[i].split(' ').map((n) => +n)
    graphs.push([a,b,c])
}

// 1. cost 기준으로 오름차순 정렬
graphs.sort((a, b) => a[2]-b[2])
let answer = 0 
graphs.forEach((e) => {
    const [a, b, c] = e
    if (union(a, b)) {
        answer+=c
    }
})


console.log(answer)