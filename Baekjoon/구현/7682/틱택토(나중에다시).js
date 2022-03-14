const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');


const checkVaild=(map)=>{
 
}

while(true){
    let tmp=input.shift()
    let map=[]
    if(tmp=="end"){
        break
    }
    let t=[]
    for(let i=0;i<9;i++){
        if(i%3==0 && t.length!=0){
            map.push(t)
            t=[]
        }
        t.push(tmp[i])
    }

    map.push(t)
    if(checkVaild(map)){
        console.log('valid')
    }
    else{
        console.log('invalid')
    }

}
