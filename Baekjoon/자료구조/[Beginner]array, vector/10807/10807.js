const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');

let n=+input[0]
let numbers=input[1].split(' ')
const v=input[2]

console.log(numbers.filter(e=>e===v).length)

