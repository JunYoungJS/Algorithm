// 나중에 정규표현식으로 다시풀기

function isLowerCase(str)
{
    return str == str.toLowerCase() && str != str.toUpperCase();
}

const level_1=(id)=>{ //모든 대문자 소문자로 변경
    return id.toLowerCase()
}
const level_2=(id)=>{
    let alpha=""
    for(let i=0;i<id.length;i++){
        if(isLowerCase(id[i]) || !isNaN(id[i]) || id[i]=='_'||id[i]=="."||id[i]=="-"){
            alpha+=id[i]
        }
    }
    return alpha
}
const level_3=(id)=>{
    let alpha=""
    for(let i=0;i<id.length;i++){
        if(id[i]=="." && id[i-1]=="."){
            alpha+=""
        }
        else{
            alpha+=id[i]
        }
    }
    return alpha
}
const level_4=(id)=>{
    let alpha=""
    if(id[0]!='.'){
        alpha+=id[0]
    }
    for(let i=1;i<id.length-1;i++){
        alpha+=id[i]
    }
    if(id[id.length-1]!='.'){
        alpha+=id[id.length-1]
    }
    return alpha
}
const level_6=(id)=>{
    let alpha=""
    if(id.length>=16){
        for(let i=0;i<14;i++){
            alpha+=id[i]
        }
    if(id[14]!='.'){
        alpha+=id[14]
    }
    }
    else{
     alpha=id  
    }
    return alpha   
}
const level_7=(id)=>{
    let alpha=id
    if(alpha.length<=2){
        while(alpha.length!=3){
            alpha+=alpha[alpha.length-1]
        }
    }
    return alpha
}




function solution(new_id) {
    var answer = '';
    new_id=level_1(new_id)
    new_id=level_2(new_id)
    new_id=level_3(new_id)
    new_id=level_4(new_id)  
    if(new_id.length==0){
        new_id+='a'
    }
    new_id=level_6(new_id)
    new_id=level_7(new_id)

    answer=new_id
    console.log(answer)
    return answer;
}
solution("...!@BaT#*..y.abcdefghijklm")
solution("z-+.^.")
solution("=.=")
solution("123_.def")
solution("abcdefghijklmn.p")
