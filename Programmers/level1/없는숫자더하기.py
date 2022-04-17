def solution(numbers):
    answer = 0
    check=[0]*10
    for i in numbers:
        check[i]+=1

    for i in range(10):
        if check[i]==0:
            answer+=i

    return answer
