const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const n=+input.shift()
const machines = input.shift().split(' ').map((n) => BigInt(n))
machines.sort((a, b) => a<b?-1:1)
let answer=-Infinity


// 홀수일경우에는 맨마지막꺼를 제외하면 됨 

// 나머지일 경우 가장작은것과 큰값을 더하면 현재 값에서 근손실을 막을수있는 최대 횟수로 그리디하게됨
if (machines.length % 2 === 1) {
   machines.unshift(BigInt(0))
}

machines_des = [...machines]
machines_des.sort((a,b)=>a<b?1:-1)


for (let i = 0; i < machines.length; i++){
    const sum=machines[i]+machines_des[i]
    answer = sum > answer ? sum : answer;
}
console.log(String(answer))
