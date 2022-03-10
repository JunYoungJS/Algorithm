const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');
let number=input.shift()
const stack=[]

for(let i=0;i<input.length;i++){
    const tmp=input[i].split(' ')
    const cmd=tmp[0]
    let num=tmp[1]
    if(num!=undefined){
        console.log(typeof num)
        stack.push(+num)
    }
    else{
        if(cmd=='top'){
            if(stack.length==0){
                console.log('-1')
            }
            else{
                console.log(stack[stack.length-1])
            }
        }
        else if(cmd=='size'){
            console.log(stack.length)
        }
        else if(cmd=='pop'){
            if(stack.length==0){
                console.log('-1')
            }
            else{
                console.log(stack.pop())
            }
        }
        else{
            if(stack.length==0){
                console.log('1')
            }
            else{
                console.log('0')
            }
        }
    }

}