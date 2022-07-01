const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
    console.log(line)
  input.push(line);
}).on('close', function (){
  process.exit();
});

const [n, m] = input.shift().split(' ').map((n) => +n)
const parent=new Array(n+1).fill(0)
for (let i = 1; i <= n; i++){
    parent[i]=i
}

for (let i = 0; i < input.length; i++){
    const [a, b, c] = input[i].split(' ').map((n) => +n)
    if (a === 0) {
        union(b,c)
    }
    else {
        let parent_x = find(b)
        let parent_y = find(c)
        if (parent_x === parent_y) {
            console.log("YES")
        }
        else {
            console.log("NO")
        }
    }
}

function find(x) {
    if (parent[x] === x) {
       return x
    } 
    else {
        return parent[x]=find(parent[x])
    }
}
function union(c_x, c_y) {
    let x = find(c_x)
    let y = find(c_y)
    // 최상단부모를 찾는다
    // 부모가 다를경우
    if (parent[x] !== parent[y]) {
        if (x < y) {
            parent[y]=x
        }
        else {
            parent[x]=y
        }

    }
}