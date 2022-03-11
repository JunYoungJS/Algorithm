const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync(__dirname+'/input.txt').toString().split('\n');
input[0]=input[0].split(" ")
input[1]=input[1].split(" ")
let alpha=input[1]
let answer_list=[]
let result=""
let [l,c]=[+input[0][0],+input[0][1]]
alpha.sort()

const check_alpha=(alpha_list)=>{
    let mo=0
    let ja=0
    
    for(let i=0;i<alpha_list.length;i++){
        if(alpha_list[i]=='a'||alpha_list[i]=='e'||alpha_list[i]=='i'||alpha_list[i]=='o'||alpha_list[i]=='u'){
            mo+=1
        }
        else
            ja+=1
        
    }

    if(mo>=1 && ja>=2){
        return true
    }
    return false
}

const dfs=(cur,answer_list)=>{
    if(answer_list.length==l){
        if(check_alpha(answer_list)){
            result+=`${answer_list.join('')}\n`
        }
        return
    }
    for(let i=cur;i<alpha.length;i++){
        answer_list.push(alpha[i])
        dfs(i+1,answer_list)
        answer_list.pop()        
    }
}

dfs(0,answer_list)
console.log(result)