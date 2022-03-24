//  완전탐색 실패 
function solution(board)
{
    var answer = 0;
    let cnt = 1
    let row=board.length
    let col=board[0].length
    
    while (cnt <= Math.min(row, col)) {
        let flag=false
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (find_square(i, j, cnt, row, col, board)) {
                    answer = Math.max(answer, cnt * cnt)
                    flag = true
                    break
                }
            }
            if(flag)break
        }
        cnt+=1
    }


    return answer;
}
const find_square = (x,y,size,max_size_x,max_size_y,board) => {
  
    let cnt=0
    for (let i = x; i < x + size; i++){
        for (let j = y; j < y + size; j++){
            if (i >= max_size_x || j >= max_size_y) {
                return false
            }

            if (board[i][j] == 1) {
                cnt+=1   
            }
        }
    }
    if (cnt == size * size) {
        return true
    }
    return false
}

// solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]])

// solution([[0,0,1,1],[1,1,1,1]]	)