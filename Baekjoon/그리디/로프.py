import sys
n=int(input())
cnt=n
ropes=[]
while n!=0:
      rope=int(input())
      ropes.append(rope)
      n-=1


ropes.sort(reverse=True)
answer=0
for i in range(cnt):
    answer=max(answer,(i+1)*ropes[i])

print(answer)