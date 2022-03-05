function solution(array, commands) {
    let answer = [];
    for(let i=0;i<commands.length;i++){
        const start=commands[i][0]-1
        const end=commands[i][1]
        const number=commands[i][2]-1
        let newarray=array.slice(start,end)
        newarray.sort((a,b)=>a-b)
        answer.push(newarray[number])
    }

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))