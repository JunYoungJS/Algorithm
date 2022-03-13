//  완전탐색 조합 문제 

function solution(orders, course) {
    var answer = [];
    for(let i=0;i<course.length;i++){
        let n=course[i]
        let answerlist=[]
        for(let j=0;j<orders.length;j++){
            let my_alpha=[]
            // 알파벳 오름차순 정렬시킴 그래야 중복조합을 피할수있음 
            orders[j]=alpha_sorted(orders[j]) 
            //  조합을 구함 
            dfs(0,orders[j],n,answerlist,my_alpha,0)
        }
        // 1. object => array 로 바꿔줌 이래야 정렬이 가능해짐 
        answerlist=sorted(answerlist)
        answerlist.sort((a,b)=>b[1]-a[1])
        // 2. 알파벳들 중에 많이 뽑은 조합을 정답에 추가시킴 
        checkanswer(answerlist,answer)
    
    }
    
    answer.sort()
    return answer;
}

// 1. 알파벳을 오름차순으로 정렬 => XY === YX 랑 같은경우가 안나오게 하기위해  
const alpha_sorted=(alphalist)=>{
    let tmp=[...alphalist]
    tmp.sort()
    tmp=tmp.join('')
    return tmp
}

const sorted=(answerlist)=>{
    let tmp=[]
    for(let a in answerlist){
        tmp.push([a,answerlist[a]])
    }
    return tmp
}
const checkanswer=(answer_list,answer)=>{
    if(answer_list.length==0){
        return
    }

    let number=answer_list[0][1]

    // 조합의 길이가 1이면 넣으면안됨
    if(number==1){
        return
    }
    answer.push(answer_list[0][0])

  

    for(let i=1;i<answer_list.length;i++){
        if(answer_list[i][1]==number){
            answer.push(answer_list[i][0])
        }
        else{
            break
        }
    }
}

// 1. 해당 알파벳의 조합을 구하는 코드 
const dfs=(depth,alphalist,n,answerlist,my_alpha,cur)=>{
    if(depth==n){
        let tmp=my_alpha.join('')
        if(answerlist[tmp]==undefined){
            answerlist[tmp]=1
        }
        else{
            answerlist[tmp]+=1
        }
    }
    for(let i=cur;i<alphalist.length;i++){
        if(!my_alpha.includes(alphalist[i])){
            my_alpha.push(alphalist[i])
            dfs(depth+1,alphalist,n,answerlist,my_alpha,i+1)
            my_alpha.pop()
        }
    }
}