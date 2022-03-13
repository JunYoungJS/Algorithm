//  dfs 돌리는 과정에서 문제발생 중복 겹치는것 떄문에  let i=0이아니라 idx값으로넣어야함
let answer_list=[]
let ryan_max=0
let ryanList=[0,0,0,0,0,0,0,0,0,0,0]
const dfs=(n,depth,apeachlist,ryanList,idx)=>{
    
    if(depth==n){ 
        scoreCheck(apeachlist,ryanList)
        return
    }
    for(let i=idx;i<=10;i++){ // 0~ 10점 n개만큼 모든 경우의수  
        ryanList[i]+=1
        dfs(n,depth+1,apeachlist,ryanList,i)
        ryanList[i]-=1
       
    }

}
const scoreCheck=(apeachlist,ryanlist)=>{
    let ryansum=0
    let apeachsum=0
    
    for(let i=0;i<apeachlist.length;i++){
        if(apeachlist[i]!=0 || ryanList[i]!=0){
            if(ryanlist[i]>apeachlist[i]){ //라이언이 해당 과녁에 더많이 맞췄으면 
                ryansum+=10-i
            }

            else if(ryanlist[i]<=apeachlist[i]){ //어피치가 더 많이맞추거나 같으면 
                apeachsum+=10-i
            }
            }
        }
    
    
    //  점수 계산 
    if(ryansum>apeachsum){ //라이언점수갱신 
        if(ryan_max<ryansum-apeachsum){ //라이언 점수 차 계산  
           ryan_max=ryansum-apeachsum
           answer_list=[]
           answer_list.push([...ryanList])
        }
        else if(ryan_max==ryansum-apeachsum){ //라이언 점수 차 계산  
            answer_list.push([...ryanList])
         }
    }
}





function solution(n, info) {
    //  1. 중복가능 n개를 고를수 있는 모든 경우의수 (1~10)을 골라서
    dfs(n,0,info,ryanList,0)
    // 1. 라이언이 우승할 방법이 없는경우 = answer_list length =0 
    if(ryan_max==0){
        return [-1]
    }
    else{
        answer_list.sort((a,b)=>{
            for(let i=10;i>0;i--){
                if(a[i]!=b[i]){
                    return b[i]-a[i]
                }
            }
        })
        
        return answer_list[0]
    }
    
}
//solution(5,[2,1,1,1,0,0,0,0,0,0,0])

solution(10,[0,0,0,0,0,0,0,0,3,4,3]	)