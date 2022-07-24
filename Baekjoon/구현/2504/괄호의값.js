const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
    .split("\n");
input = input.toString()
input=[...input]
let stack = []
let answer = 0

for (let i = 0; i < input.length; i++){
    if (input[i] === '(') {
        stack.push(['(',1])
    }
    else if (input[i] === '[') {
        stack.push(['[',1])
    }
    else if (input[i] === ')') {
        if (stack.length !== 0 && stack[stack.length - 1][0] === '(') {
            const p = stack.pop()
            stack.push(['(',p[1]*2])
       }

    }

    else if (input[i] === ']') {
        if (stack.length !== 0 && stack[stack.length - 1][0] === '[') {
            const p = stack.pop()
            stack.push(['(',p[1]*3])
       }
    }
}
console.log(stack)
console.log(stack2)