import math
def convert_to_number(n,digit):
    new_number=""
    while n!=0:
          new_number+=str(n%digit)
          n=n//digit

    new_number=list(new_number)
    new_number.reverse()
    new_number="".join(new_number)
    return new_number




def solution(n, k):
    answer = 0
    number=convert_to_number(n,k)

    number_list=number.split('0')


    for i in number_list:
        if i.isdigit() and isSosu(int(i)):
            answer+=1

    return answer



def isSosu(number):
    if number<2:
        return False

    for i in range(2, int(math.sqrt(number)) + 1):
        if number % i == 0:
            return False

    return True


solution(110011,10)