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
// 짝수 일경우 모든 기구 사용 다가능 맨 앞 값 + 맨뒤값
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
