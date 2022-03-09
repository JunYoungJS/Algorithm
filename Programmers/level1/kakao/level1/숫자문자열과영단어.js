function solution(s) {
    let answer = "";
    const alphalist={
        'zero':'0',
        'one':'1',
        'two':'2',
        'three':'3',
        'four':'4',
        'five':'5',
        'six':'6',
        'seven':'7',
        'eight':'8',
        'nine':'9',
        '1':'1',
        '2':'2',
        '3':'3',
        '4':'4',
        '5':'5',
        '6':'6',
        '7':'7',
        '8':'8',
        '9':'9',
        '0':'0',
    }

    let temp=""
    for(let i=0;i<s.length;i++){
        if(alphalist[temp]!=undefined){
            answer+=alphalist[temp]
            temp=""
        }
        temp+=s[i]
    }
    answer+=alphalist[temp]


    return +answer
}


// solution("one4seveneight")
// solution("123")
// solution("23four5six7")
// solution("2three45sixseven")