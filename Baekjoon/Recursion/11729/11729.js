let answer=[]

const hanoi=(start,bypass,to,n)=>{ // 기둥시작점 , 거치는지점 ,목표지점 
    if(n==1){ // 해당기둥에 원판이 한개 남았을떄 세번쨰로  
        answer.push([start,to])
        return
    }

    hanoi(start,to,bypass,n-1) //n-1 개의 원판을 기둥 1에서 3을거쳐 2로 이동  
    answer.push([start,to]) // n개의 기둥을 세번쨰로 
    hanoi(bypass,start,to,n-1) //n-1개의 원판을 기둥 2에서 1을 거쳐 3으로 이동

}
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split(' ');

console.log(Math.pow(2,+input[0])-1)
hanoi(1,2,3,+input[0])
console.log(answer.map((e)=>e.join(" ")).join('\n'))
