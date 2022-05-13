def solution(s):
    answer = ''
    s=s.split(' ')
    for i in range(len(s)):
        s[i]=int(s[i])


    s.sort()
    answer+=str(s[0])
    answer+=' '
    answer+=str(s[-1])
    return answer
