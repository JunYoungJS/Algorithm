import collections
def isVaild(s):
    stack=[]
    for i in s:
        if i=='[' or i=='(' or i=='{':
            stack.append(i)

        elif len(stack)!=0:
            if i==']' and stack[-1]=='[':
                stack.pop()

            elif i==')' and stack[-1]=='(':
                 stack.pop()

            elif i=='}' and stack[-1]=='{':
                 stack.pop()
            else:
                stack.append(i)

        else:
             stack.append(i)


    if len(stack)==0:
        return  True
    return False

def solution(s):
    answer = 0
    queue=collections.deque(s)
    n=len(s)
    while n!=0:
          if isVaild(queue):
              answer+=1

          queue.append(queue.popleft())
          n-=1


    return answer

solution("[](){}")
solution("}]()[{")
solution("[)(]")