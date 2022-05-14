import sys
def input():
    return sys.stdin.readline().rstrip()

n,m=map(int,input().split())
a=[]
b=[]
for i in range(n):
    e_length,v=map(int,input().split())
    while e_length!=0:
          # 해당 높이의 속도를 다넣어줌
          a.append(v)
          e_length-=1

for i in range(m):
    e_length, v = map(int, input().split())
    while e_length != 0:
        # 해당 높이의 속도를 다넣어줌
        b.append(v)
        e_length -= 1

answer=0
for i in range(100):
    # 해당 높이의 속도차중 제한속도를 넘어난것을 찾아줌 
    answer=max(answer,b[i]-a[i])

print(answer)
