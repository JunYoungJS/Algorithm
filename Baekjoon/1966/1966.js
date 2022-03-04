const convert=(array)=>{
    let newarr=[]
    for(const i in array){
        newarr.push([+i,+array[i]]) // 문서번호, 중요도
    }

    return newarr
}
const findmaxNumber=(array,cur)=>{
    for(const a in array){
        if(array[a][1]>cur){
            return true
        }

    }
    return false
}

const fs = require('fs');
 let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let input = fs.readFileSync('input.txt').toString().split('\n');
let t=+input.shift()

while(t!=0){
    let answer=[]
    let tmp=input.shift()
    let papers=input.shift()
    tmp=tmp.split(' ')
    const m=+tmp[1]
    papers=papers.split(' ')
    papers=convert(papers) // 중요도와 문서번호순으로 새로운 배열만듬
    

    while(papers.length!=0){
        if(findmaxNumber(papers,papers[0][1])){ // 중요도가 큰 문서가있는지확인
            const a=papers.shift() //뒤로보냄
            papers.push(a)
        }
        else{ //중요도 큰게없으면
            answer.push(papers.shift())
        }
    }

    for(const i in answer){
        if(answer[i][0]==m){
            console.log(+i+1)
            break
        }
    }
    t-=1
}
