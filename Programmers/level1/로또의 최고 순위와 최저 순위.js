function solution(lottos, win_nums) {
    let answer = [];
    let ans=0

    

    zero_count=lottos.filter(e=>0===e).length

    for(let i=0;i<win_nums.length;i++){
        for(let j=0;j<lottos.length;j++){
            if(win_nums[i]==lottos[j]){
                ans+=1
            }
        }

    }

    answer.push(check_rank(ans))
    answer.push(check_rank(ans+zero_count))

    answer.sort((a,b)=>a-b)

    return answer;
}
const check_rank=(number)=>{
    if(number==6){
        return 1
    }
    else if(number==5){
        return 2
    }
    else if(number==4){
        return 3
    }
    else if(number==3){
        return 4
    }
    else if(number==2){
        return 5
    }
    else{
        return 6
    }
}

console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))