import heapq
def solution(n, works):
    answer = 0
    for i in range(len(works)):
        works[i]=works[i]*-1

    heapq.heapify(works)
    while n!=0:
          max_value=heapq.heappop(works)
          if max_value==0:
              heapq.heappush(works,max_value)
              break

          max_value+=1
          heapq.heappush(works,max_value)
          n-=1

    for i in works:
        number=abs(i)
        answer+=pow(number,2)

    return answer


solution(3,[1,1])