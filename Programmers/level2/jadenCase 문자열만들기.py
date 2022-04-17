def convert(tmp):
    answer=""
    answer+=tmp[0].upper()
    for i in range(1,len(tmp)):
        answer+=tmp[i].lower()

    return answer


def solution(s):
    answer = ''
    s=s.split(' ')

    for i in s:
        if i=='':
            answer+=' '

        else:
            answer+=convert(i)
            answer+=' '


    answer=answer[0:len(answer)-1]


    return answer
