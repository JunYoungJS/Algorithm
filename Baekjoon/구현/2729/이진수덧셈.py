import sys
def input():
    return sys.stdin.readline().rstrip()

n=int(input())

while n!=0:
      a,b=map(str,input().split())
      s=(bin(int(a,2)+int(b,2)))[2:]
      print(s)

      n-=1