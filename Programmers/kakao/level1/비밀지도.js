function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0;i<arr1.length;i++){
        let sum=(arr1[i]|arr2[i]).toString(2)
        sum.padStart(n,'0')

        let tmp=""
        for(let i=sum.length-n;i<sum.length;i++){
            if(sum[i]=='1'){
                tmp+='#'
            }
            else{
                tmp+=' '
            }
        }
        answer.push(tmp)

    }
    console.log(answer)

    return answer;
}

solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10])