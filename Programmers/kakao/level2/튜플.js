function solution(s) {
    let answer = [];
    let tmp_list=[]
    let tmp_set=new Set()
    let tmp=s.split('},')

    for(let i=0;i<tmp.length;i++){
        // 1.문자열리스트=>숫자리스트로 파싱
        let num=parsenumber(tmp[i])
        tmp_list.push(num)
    }
    // 2. 길이순으로 정렬 
    tmp_list.sort((a,b)=>a.length-b.length)

    // 3. 길이순으로 순회하여 set에넣음 
    for(let i=0;i<tmp_list.length;i++){
        for(let j=0;j<tmp_list[i].length;j++){
            if(!tmp_set.has(+tmp_list[i][j])){
                tmp_set.add(+tmp_list[i][j])
                break
            }
        }
    }

    answer=[...tmp_set]

    return answer;
}

const parsenumber=(number)=>{
    let tmp=""
    let numberlist=[]
    for(let i=0;i<number.length;i++){
        if(!isNaN(number[i])){
            tmp+=number[i]
        }
        else if(number[i]==','){
            numberlist.push(+tmp)
            tmp=""
        }
    }
    if(tmp.length!=0){
        numberlist.push(+tmp)
    }

    return numberlist
}
//solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")
//solution("{{20,111},{111}}")
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")