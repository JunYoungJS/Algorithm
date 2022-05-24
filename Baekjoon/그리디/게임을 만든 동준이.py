n=int(input())
scores=[]
for i in range(n):
    scores.append(int(input()))


answer=0
for i in range(len(scores)-1,0,-1):
    if scores[i]<=scores[i-1]:
        answer+=scores[i-1]-scores[i]+1
        scores[i-1]-=scores[i-1]-scores[i]+1

print(answer)
