import collections
def solution(prices):
    answer = []
    prices=collections.deque(prices)
    while len(prices)!=0:
          cur_price=prices.popleft()
          cnt=0
          for i in prices:
                if cur_price>i:
                    cnt+=1
                    break
                else:
                    cnt+=1

          answer.append(cnt)


    return answer


solution([1, 2, 3, 2, 3])