
// const test="input.txt"
const test='/dev/stdin'
let input = require('fs').readFileSync(test).toString().split(' ');
let n = parseInt(input[0]);
let k = parseInt(input[1]);

const people=[]
const newpeople=[]
let cnt=1
for(let i=1;i<=n;i++){
    people.push(i)
}


while(newpeople.length!=n){
    const tmp=people.shift()
    if(cnt==k){
        cnt=1
        newpeople.push(tmp)
        continue
    }
    else{
        people.push(tmp)
    }

    cnt+=1
}
console.log(`<${newpeople.join(', ')}>`)
