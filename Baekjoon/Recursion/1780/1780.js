const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
let map=[]
let minus=0
let one=0
let zero=0
let n=+(input.shift())

for(let i=0;i<input.length;i++){
    let tmp=input[i].split(' ')
    map.push(tmp)
}


const cutting=(n,cur_x,cur_y)=>{
    let cur=map[cur_x][cur_y]
    let flag=false
    let cnt=0

    // 1. 범위확인
    for(let i=cur_x;i<cur_x+n;i++){
        for(let j=cur_y;j<cur_y+n;j++){
            if(map[i][j]!=cur){
                flag=true
                break
            }
        }
        if(flag)break
    }
    let size=Math.floor(n/3)
    // 2. 범위내에 다른거만있으면
    if(flag){//자른다
        cutting(size,cur_x,cur_y)
        cutting(size,cur_x,cur_y+size)
        cutting(size,cur_x,cur_y+size+size)

        cutting(size,cur_x+size,cur_y)
        cutting(size,cur_x+size,cur_y+size)
        cutting(size,cur_x+size,cur_y+size+size)

        cutting(size,cur_x+size+size,cur_y)
        cutting(size,cur_x+size+size,cur_y+size)
        cutting(size,cur_x+size+size,cur_y+size+size)

    }
    else{
        if(cur=='-1'){
            minus+=1
        }
        else if(cur=='0'){
            zero+=1
        }
        else{
            one+=1
        }
        return
        //정답에추가시킨다.
    }
}

cutting(n,0,0)
console.log(minus)
console.log(zero)
console.log(one)