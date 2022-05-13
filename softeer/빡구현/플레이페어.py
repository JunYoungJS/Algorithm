import sys
def init_board():
    global board,key,alpha
    tmp=[]
    idx=0
    for i in key:
        if i not in tmp:
            tmp.append(i)

    while len(tmp)!=25:
          # 중복된거가아니면
          if alpha[idx] not in tmp:
                tmp.append(alpha[idx])

          idx+=1
          idx%=len(alpha)


    for i in range(5):
        for j in range(5):
            board[i][j]=tmp.pop(0)

def new_cipertext():
    global cipher_text
    new_word=list(cipher_text)
    answer=""

    while len(new_word)>1:
          a=new_word.pop(0)
          b=new_word.pop(0)
          if a==b:
              if a=='X':
                  answer+=a+'Q'
                  new_word.insert(0,b)
              else:
                  answer+=a+'X'
                  new_word.insert(0,b)
          else:
               answer+=a+b

    if len(new_word)!=0:
        answer+=new_word[-1]+'X'

    return list(answer)

def input():
    return sys.stdin.readline().rstrip()

def row_check(a,b):
    global board
    new_word_a=""
    new_word_b=""

    for i in range(5):
        tmp_board=list(board[i])
        if a in tmp_board and b in tmp_board:
            find_idx_a=tmp_board.index(a)
            find_idx_a=(find_idx_a+1)%5
            find_idx_b = tmp_board.index(b)
            find_idx_b = (find_idx_b + 1) % 5

            new_word_a=board[i][find_idx_a]
            new_word_b=board[i][find_idx_b]
            return [True,new_word_a + new_word_b]

    return [False,new_word_a + new_word_b]


def col_check(a,b):
    global board
    new_word_a = ""
    new_word_b = ""

    for i in range(5):
        tmp_board=[]
        for j in range(5):
            tmp_board.append(board[j][i])

        if a in tmp_board and b in tmp_board:
            find_idx_a = tmp_board.index(a)
            find_idx_a = (find_idx_a + 1) % 5
            find_idx_b = tmp_board.index(b)
            find_idx_b = (find_idx_b + 1) % 5

            new_word_a = board[find_idx_a][i]
            new_word_b = board[find_idx_b][i]
            return [True, new_word_a + new_word_b]

    return [False, new_word_a + new_word_b]

def other_check(a,b):
    global board
    new_word_a = ""
    new_word_b = ""
    a_x,a_y=0,0
    b_x,b_y=0,0
    for i in range(5):
        for j in range(5):
            if a in board[i][j]:
               a_x=i
               a_y=j

            elif b in board[i][j]:
                 b_x=i
                 b_y=j


    new_word_a=board[a_x][b_y]
    new_word_b=board[b_x][a_y]

    return new_word_a+new_word_b


cipher_text=str(input())
key=str(input())

board=[[0]*5 for _ in range(5)]
alpha=[]
answer=[]
for i in range(65,91):
    if chr(i)=='J':
        alpha.append('I')
    else:
        alpha.append(chr(i))

init_board()
#  1번 보드 정의


# 2번 암호화 메세지를 두글자 씩 뛰우고 새로운 암호화키 만들기 stack 이용
new_ciper_text=new_cipertext()


# 3-1 새로운 암호키 두개가 한행에 있는지확인
while len(new_ciper_text)!=0:
      a=new_ciper_text.pop(0)
      b=new_ciper_text.pop(0)
      r_check=row_check(a,b)

      if r_check[0]:
          answer.append(r_check[1])
          continue

      c_check=col_check(a, b)
      if c_check[0]:
           answer.append(c_check[1])
           continue


      answer.append(other_check(a,b))

print("".join(answer))

