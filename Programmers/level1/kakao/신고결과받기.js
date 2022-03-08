function solution(id_list, report, k) {
    let answer = [];
    let users=[]
    let singoUsers=[]


    // 1. report muzi frodo = muzi가 frode를 신고 함 , (muzi = key value= 신고한사람 저장) => set으로 저장 중복신고 불가능 
    for(let i=0;i<id_list.length;i++){
        users[id_list[i]]=new Set()
        singoUsers[id_list[i]]=0
    }

    // 2. 해당유저가 신고한사람을 넣음 (중복신고 x)
    for(let i=0;i<report.length;i++){
        const tmp=report[i].split(' ')
        users[tmp[0]].add(tmp[1]) 
    }
    
    
    // 3. 신고 당한사람 카운팅

    for(const key in users){
        for(const value of users[key].keys()){
            singoUsers[value]+=1
        }
    }

    // 4. 정지된 아이디인지 확인하고 정지된아이디면 정답에 넣음 
    for(const key in users){
        let cnt=0
        for(const value of users[key].keys()){
            if(singoUsers[value]>=k){
                cnt+=1
            }
        }
        answer.push(cnt)
    }
    








    return answer;


}
// 해당 id_list의 유저가 정지시킨 유저의 수 반환 



//solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2)
//solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3)