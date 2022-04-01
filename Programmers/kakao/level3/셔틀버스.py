#-*- coding: utf-8 -*-
def solution(n, t, m, timetable):
    answer = ''
    bus_ride_time={}
    new_timetable=[]
    for i in timetable:
        new_timetable.append(time_to_second(i))

    new_timetable.sort()
    bus=[]
    start_time=time_to_second("09:00")
    # 1. 9시부터 시작하여 현재 셔틀보다 작은시간에 도착한 사람이 있는지 확인 후 태움 n-=1
    # 2. n이 0이 될떄 마지막으로 탄 사람보다 일찍도착하면 됨
    last_bus_time=0
    while n!=0:
          #  태울수있는 사람이있는지 확인하고 있으면 태움 m명을
          for i in range(m):
              if start_time not in bus_ride_time:
                  bus_ride_time[start_time] = []
                  last_bus_time = start_time

              if len(new_timetable)!=0 and start_time>=new_timetable[0]:
                 bus_ride_time[start_time].append(new_timetable.pop(0))



          start_time=start_time+60*t # 다음 도착시간
          n-=1


    if len(bus_ride_time[last_bus_time])==0:
        answer=last_bus_time

    else:
        tmp=[]
        for i in bus_ride_time[last_bus_time]:
            tmp.append(i)

        answer = tmp[len(tmp) - 1]
        # 버스에 사람이 꽉차있으면 한명 쫓아내야함
        if len(tmp)==m:
            answer-=60
        # 버스에 사람이 꽉 안차있으면 마지막 시간에 감
        else:
             answer=last_bus_time


    answer = second_to_time(answer)

    return answer


def time_to_second(time):
    hour,minute=time.split(':')
    second=3600*int(hour)+60*int(minute)
    return second

def second_to_time(time):
    hour=int(time//3600)
    minute=int(time/60%60)
    hour=str(hour).zfill(2)
    minute=str(minute).zfill(2)
    t=hour+":"+minute

    return t


solution(1,1,5,["08:00", "08:01", "08:02", "08:03"])
#solution(2,10,2,["09:10", "09:09", "08:00"]	)
# solution(2,1,2,["09:00", "09:00", "09:00", "09:00"]	)
# solution(1,1,5,["00:01", "00:01", "00:01", "00:01", "00:01"])
# solution(1,1,1,["23:59"])

#solution(10,60,45,["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"])