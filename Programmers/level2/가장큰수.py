def solution(numbers):
    answer = ''
    new_numbers=[]
    for i in numbers:
        new_numbers.append(str(i))

    new_numbers.sort(key= lambda x:x*3,reverse=True)

    answer=int("".join(new_numbers))
    return str(answer)


solution([3, 30, 34, 5, 9])