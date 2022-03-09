function solution(N, stages) {
    var answer = [];
    let stagesCnt=[]
    let tmp=[]

    for(let i=0;i<N+1;i++){
        stagesCnt.push(0)
        answer.push(0)
    }
    
    for(let i=0;i<stages.length;i++){
        if(stages[i]<=N){
            stagesCnt[stages[i]]+=1
        }
    }

    let m=stages.length

    for(let i=1;i<stagesCnt.length;i++){
        answer[i]=[stagesCnt[i]/m,i]
        m-=stagesCnt[i]
    }

    answer.sort((a,b)=>{return b[0]-a[0]}
    )

    for(let i=1;i<answer.length;i++){
        tmp.push(answer[i][1])
    }

    return tmp;

}
console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))