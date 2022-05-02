def generateCombination(x,y,dp,n):
    for i in dp[x]:
        for j in dp[y]:
            dp[n].add(i+j)
            dp[n].add(i-j)
            dp[n].add(i*j)
            if i!=0 and j!=0:
               dp[n].add(i//j)

    return
def solution(N, number):
    answer = 9
    dp=dict()


    for i in range(1,10):
        if i not in dp:
            dp[i]=set()
            num=int(str(N)*i)
            dp[i].add(num)

        for j in range(1,i):
            generateCombination(i-j,j,dp,i)

    for i in range(1,10):
        if number in dp[i]:
            answer=i
            break

    if answer==9:
        return -1

    return answer