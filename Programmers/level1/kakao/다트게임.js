function solution(dartResult) {
    let answer = 0;
    let stack=[]
    let tmp=""
    for(let i=0;i<dartResult.length;i++){
        if(!isNaN(dartResult[i])){//숫자면
            tmp+=dartResult[i]
        }
        else{ //문자면
            if(tmp.length!=0){
                stack.push(+tmp)
                tmp=""
            }
            let number=stack.pop()
            if(dartResult[i]=='S'){
                stack.push(Math.pow(number,1))
            }
            else if(dartResult[i]=='D'){
                stack.push(Math.pow(number,2))
            }
            else if(dartResult[i]=='T'){
                stack.push(Math.pow(number,3))
            }
            
            else{
                if(dartResult[i]=='*'){
                    if(stack.length!=0){
                        let n2=stack.pop()
                        stack.push(n2*2)
                    }
                    stack.push(number*2)
                }
                else{
                    stack.push(number*-1)
                }
            }
        }
    }

    while(stack.length!=0){
        answer+=stack.pop()
    }
    console.log(answer)


    return answer;
}


solution("1S*2T*3S")