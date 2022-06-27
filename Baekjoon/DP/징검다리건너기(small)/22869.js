const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");


const [n, m] = input.shift().split(' ').map((n) => +n)
const rocks = input.shift().split(' ').map((n) => +n)
const dp = new Array(n + 1).fill(Infinity)
dp[1]=0
rocks.unshift(0)

for (let i = 2; i <=n; i++){
    for (let j = 1; j < i; j++){
        // j번쨰돌에서 i 번쨰로 이동하는경우
        const cal = (i - j) * (1 + Math.abs(rocks[j] - rocks[i]))
        // 이동을하려면 이전위치에 도달할수있어야함 (메모제이션값으로 확인)
        if (cal < m && dp[j]<m) {
            dp[i] = Math.min(dp[i], cal)
        }

    }
}

if (dp[n] === Infinity) {
    console.log("NO")
}
else {
    console.log("YES")
}