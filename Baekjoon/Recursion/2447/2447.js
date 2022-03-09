const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');

let n=+input[0]
let map=[]

for(let i=0;i<n;i++){
    let tmp=[]
    for(let j=0;j<n;j++){
        tmp.push(' ')
    }
    map.push(tmp)
}

const re=(n1,cur_x,cur_y)=>{
    let size=Math.floor(n1/3)
    if(n1==1){
        map[cur_x][cur_y]='*'
        return
    }
    
    re(size,cur_x,cur_y)
    re(size,cur_x,cur_y+size)
    re(size,cur_x,cur_y+size+size)
    re(size,cur_x+size,cur_y)
    
    re(size,cur_x+size,cur_y+size+size)
    re(size,cur_x+size+size,cur_y)
    re(size,cur_x+size+size,cur_y+size)
    re(size,cur_x+size+size,cur_y+size+size)
    

}

re(n,0,0)


for(let i=0;i<map.length;i++){
    console.log(map[i].join(''))
}

