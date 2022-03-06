function solution(id_list, report, k) {
    let answer = []
    let datalist=[]
    let cnt_list=[]

    for(let i=0;i<id_list.length;i++){
        cnt_list[id_list[i]]=0
        answer[id_list[i]]=0
        datalist[id_list[i]]=new Set() 
      }
      // 변수선언
  

      // 중복신고 제거 포함 datalist= 신고한사람 : {신고당한사람}
    for(let i=0;i<report.length;i++){  
        const t=report[i].split(' ')
        const my_id=t[0] //신고한사람
        const t_id=t[1] //당한사람
        datalist[my_id].add(t_id)  
    }

    // 신고횟수 카운팅
    for(let key in datalist){
        if(datalist[key].size!=0){
            for(let a of datalist[key].keys()){
                cnt_list[a]+=1 //신고횟수증가
            }
        }
    }  
    
    // 신고횟수가 k이상인 유저 찾기 
    for(let key in datalist){
       for(let a of datalist[key].keys()){
           if(cnt_list[a]>=k){
                answer[key]+=1
           }
       }
    }

    //정답 배열 반환
    let tmp=[]
    for(let i=0;i<id_list.length;i++){
        tmp.push(answer[id_list[i]])
    }
    return tmp;
}

//solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2)
//solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3)