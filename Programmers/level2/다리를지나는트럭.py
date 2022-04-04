import collections
def solution(bridge_length, weight, truck_weights):
    answer = 0

    truck_weights=collections.deque(truck_weights)
    truck_list=[]
    time=0
    s=0

    while True:
          if len(truck_weights) == 0 and len(truck_list)==0:
              break

          if len(truck_list)!=0 and time==truck_list[0][1]:
              tmp=truck_list.pop(0)
              s-=tmp[0]


          if len(truck_weights)!=0 and s+truck_weights[0]<=weight:
              truck=truck_weights.popleft()
              s+=truck
              truck_list.append([truck,time+bridge_length])



          time+=1



    answer=time
    return answer
