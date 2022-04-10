def solution(number, k):
    answer = ''
    rm=0
    stack=[]
    for i in range(len(number)):
        while stack and stack[-1]<int(number[i]) and rm+1<=k:
              stack.pop()
              rm+=1

        stack.append(int(number[i]))


    while rm!=k:
          stack.pop()
          rm+=1

    for i in stack:
        answer+=str(i)


    return answer


#solution("987654321",5)
solution("4177252841",4)