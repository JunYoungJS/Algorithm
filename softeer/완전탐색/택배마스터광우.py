import sys
import collections
import itertools
def complete_task(tasks,k,weight):
    my_weight=0
    my_task=0
    queue=collections.deque(tasks)
    while k!=0:
          tmp=queue.popleft()
          my_weight+=tmp
          if my_weight>weight:
              queue.appendleft(tmp)
              my_task+=my_weight-tmp
              my_weight=0
              k -= 1
              continue

          queue.append(tmp)




    return my_task

def input():
    return sys.stdin.readline().rstrip()

n,m,k=map(int,input().split())
weights=list(map(int,input().split()))

permute=list(itertools.permutations(weights))
answer=999999999
for task in permute:
    answer=min(answer,complete_task(task,k,m))

print(answer)