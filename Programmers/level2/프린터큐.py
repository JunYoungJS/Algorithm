import collections
import heapq
def solution(priorities, location):
    new_printer=collections.deque()
    orders=[]
    answer_list=[]
    rank=1
    for i in range(len(priorities)):
        new_printer.append([i,priorities[i]])
        orders.append(priorities[i]*-1)

    heapq.heapify(orders)

    while len(new_printer)!=0:
          order=heapq.heappop(orders)
          order*=-1
          lot,item=new_printer.popleft()

          if order==item:
              answer_list.append([lot,rank])
              rank+=1

          else:
              new_printer.append([lot,item])
              heapq.heappush(orders,order*-1)



    for i in answer_list:
        if i[0]==location:
            return i[1]

solution([2, 1, 3, 2],2)