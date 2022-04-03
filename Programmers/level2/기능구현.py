import collections
def solution(progresses, speeds):
    answer = []
    times=collections.deque()
    for i in range(len(progresses)):
        rest=100-progresses[i]
        day=rest//speeds[i]
        if rest%speeds[i]!=0:
            day+=1


        times.append(day)

    start=times.popleft()
    stack=[start]
    while len(times)!=0:
          item=times.popleft()
          if item<=start:
              stack.append(item)
          else:
              answer.append(len(stack))
              stack=[item]
              start=item


    if len(stack)!=0:
        answer.append(len(stack))


    return answer



solution([93, 30, 55],[1, 30, 5])
