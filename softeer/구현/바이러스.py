import sys

def input():
    return sys.stdin.readline().rstrip()

k,p,n=map(int,input().split())

while n!=0:
      k=(k*p)%1000000007
      n-=1

print(k)