def solution(price, money, count):
    answer = -1

    total=0
    tmp=0
    while count!=0:
          tmp+=price
          total+=tmp
          count-=1


    answer=money-total

    if answer<0:
        answer=abs(answer)
    else:
        answer=0

    return answer


solution(3,20,4)