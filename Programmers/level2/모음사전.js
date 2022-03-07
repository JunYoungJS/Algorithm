//다른 사람 꺼 풀이 보고 해결 (수학풀이)
//완탐으로 풀어보기

function solution(word) {
    let answer=0
    let alpha={'A':0,
               'E':1,
               'I':2,
               'O':3,
               'U':4  
            }
    
    let number=[781, 156, 31, 6, 1]
    
    for(let i=0;i<word.length;i++){
        answer+=alpha[word[i]]*number[i]+1
    }
    
    return answer;
}
