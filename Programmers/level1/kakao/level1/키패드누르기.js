function solution(numbers, hand) {
    let answer = '';
    let keypad={
        1:[0,0],
        2:[0,1],
        3:[0,2],
        4:[1,0],
        5:[1,1],
        6:[1,2],
        7:[2,0],
        8:[2,1],
        9:[2,2],
        0:[3,1],
    }
    let lefthand=[3,0]
    let righthand=[3,2]


    for(let i=0;i<numbers.length;i++){
        let target=keypad[numbers[i]]
        if(numbers[i]==1||numbers[i]==4||numbers[i]==7){ // left 손 이동 거리안재고그냥이동
            lefthand=target
            answer+='L'
        }
        else if(numbers[i]==3||numbers[i]==6||numbers[i]==9){ // right 손 이동 거리안재고그냥이동
            righthand=target
            answer+='R'
        }
        else{ //2,5,8,0 왼쪽 오른쪽손중가까운손으로이동
            let leftdist=Math.abs(lefthand[0]-target[0])+Math.abs(lefthand[1]-target[1])
            let rightdist=Math.abs(righthand[0]-target[0])+Math.abs(righthand[1]-target[1])

            if(leftdist<rightdist){ //왼쪽 손거리가 가까우면 왼손이동
               lefthand=target
               answer+='L'
            }
            else if(leftdist>rightdist){ //오른쪽 손거리가 가까우면 오른손 이동
                righthand=target
                answer+='R'
             }
             else{ //거리가같으면
                if(hand=="right"){
                    righthand=target
                    answer+='R'
                }
                else{
                    lefthand=target
                    answer+='L'
                }
             }
        }
    }


    return answer;
}