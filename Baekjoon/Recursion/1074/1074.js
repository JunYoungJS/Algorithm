const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split(' ');
let answer=0
const n=+input[0]
const r=+input[1]
const c=+input[2]

const z=(n,cur_r,cur_c)=>{
    if(cur_r==r && cur_c==c){
        console.log(answer)
        return
    }
    
    let size=Math.floor(Math.pow(2,n)/2) //n=3 4 , n=2 1
    let range=Math.pow(2,n)-1

    if(r>=cur_r && c>=cur_c && r<=cur_r+range && c<=cur_c+range){ // r이 범위안에 들어가면 분할 범위안에 못들어가면 탈출
        z(n-1,cur_r,cur_c)
        z(n-1,cur_r,cur_c+size)
        z(n-1,cur_r+size,cur_c)
        z(n-1,cur_r+size,cur_c+size)
    }
    else{
        answer+=Math.pow(range+1,2)
        return
    }

}




z(n,0,0)

