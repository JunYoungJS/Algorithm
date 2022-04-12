import itertools
def isSosu(number):
    if number<2:
        return False
    for i in range(2,number):
        if number%i==0:
            return False

    return True

def solution(numbers):
    answer = set()
    numbers=list(numbers)
    for cnt in range(1,len(numbers)+1):
        new_number=list(set(map(''.join,itertools.permutations(numbers,cnt))))
        for j in new_number:
            if isSosu(int(j)):
                answer.add(int(j))


    return len(answer)


solution("011")