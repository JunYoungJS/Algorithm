const move =(cur,board,stack)=>{

   for(let i=0;i<board.length;i++){
        if(board[i][cur]!=0){ //cur그대로 i값만이동
           stack.push(board[i][cur])
           board[i][cur]=0
           return
        }
    }
}

function solution(board, moves) {
    var answer = 0;
    let stack=[]

    for(let i=0;i<moves.length;i++){
        move(moves[i]-1,board,stack)
        if(stack.length>1){
            let a=stack.pop()
            let b=stack.pop()
            if(a==b){
                answer+=1
            }
            else{
                stack.push(b)
                stack.push(a)
            }
        }


    }
    
    answer*=2
    
    return answer;
}

//solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])