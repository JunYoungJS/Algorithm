function solution(answers) {
    let answer = [];
    const n_1=[1,2,3,4,5]
    const n_2=[2,1,2,3,2,4,2,5]
    const n_3=[3,3,1,1,2,2,4,4,5,5]
    let cnt_1=0
    let cnt_2=0
    let cnt_3=0

    for(let i=0;i<answers.length;i++){
        if(answers[i]==n_1[i%n_1.length]){
            cnt_1+=1
        }
        if(answers[i]==n_2[i%n_2.length]){
            cnt_2+=1
        }
        if(answers[i]==n_3[i%n_3.length]){
            cnt_3+=1
        }
    }

    if(cnt_1>=cnt_2 && cnt_1>=cnt_3){
        answer.push(1)
    }
    if(cnt_2>=cnt_1 && cnt_2>=cnt_3){
        answer.push(2)
    }
    
    if(cnt_3>=cnt_1 && cnt_3>=cnt_2){
        answer.push(3)
    }

    return answer;
}


solution([1,2,3,4,5])