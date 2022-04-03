import heapq
def solution(scoville, K):
    heapq.heapify(scoville)
    answer = 0
    min_value = -1
    min_value2 = -1

    while len(scoville)!=1:
          if len(scoville)>=2:
             min_value=heapq.heappop(scoville)
             min_value2 = heapq.heappop(scoville)

          if min_value>=K:
              return answer


          mixed=min_value+(min_value2*2)
          heapq.heappush(scoville,mixed)
          answer+=1



    if scoville[0]>=K:
        return answer

    return -1


solution([1,1,1],7)