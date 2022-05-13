import sys
answer=0
def input():
    return sys.stdin.readline().rstrip()

def valid(value):
    global budgets,answer,max_budgets
    s = 0

    for i in budgets:
        if i>value:
            s+=value

        else:
            s+=i

    if s>max_budgets:
        return 0

    return s

n=int(input())
budgets=list(map(int,input().split()))
max_budgets=int(input())
max_value=max(budgets)
min_value=1
while min_value<=max_value:
      mid=(min_value+max_value)//2
      if valid(mid):
          answer=max(answer,mid)
          min_value=mid+1
      else:
           max_value=mid-1

print(answer)