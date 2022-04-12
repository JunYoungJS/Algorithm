answer=0

def dfs(numbers,idx,s,target):
    global answer
    if idx>=len(numbers):
        if s==target:
           answer+=1
        return

    dfs(numbers,idx+1,s+numbers[idx],target)
    dfs(numbers,idx+1,s-numbers[idx],target)

    return
def solution(numbers, target):
    dfs(numbers,0,0,target)
    print(answer)
    return answer


solution([4, 1, 2, 1],4)