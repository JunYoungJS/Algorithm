const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let map=[]
let white=0
let blue=0

let n=+(input.shift())

for(let i=0;i<input.length;i++){
    let tmp=input[i].split(' ')
    map.push(tmp)
}



const cut=(n,cur_x,cur_y)=>{
    let cur=map[cur_x][cur_y]
    let flag=false

    for(let i=cur_x;i<cur_x+n;i++){
        for(let j=cur_y;j<cur_y+n;j++){
            if(cur!=map[i][j]){  // 다른게 발견되면 
                flag=true
                break
            }
        }
        if(flag)break
    }
    
    let size=Math.floor(n/2)
    if(flag){
        cut(size,cur_x,cur_y)
        cut(size,cur_x,cur_y+size)
        cut(size,cur_x+size,cur_y)
        cut(size,cur_x+size,cur_y+size)
    }
    else{
        if(cur=='1'){
            blue+=1
        }
        else{
            white+=1
        }
        return
    }
}

cut(n,0,0)
console.log(white)
console.log(blue)
