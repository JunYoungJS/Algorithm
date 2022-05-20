import sys

def input():
    return sys.stdin.readline().rstrip()


n,s=map(int,input().split())
cow=[0]*n
for i in range(n):
    cow[i]=int(input())

cow.sort()


answer=0
left=0
right = len(cow) - 1

while left<right:
      if cow[left]+cow[right]<=s:
         answer+=right-left
         left+=1
      else:
          right-=1

print(answer)
