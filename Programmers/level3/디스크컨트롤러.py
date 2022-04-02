def solution(jobs):
    answer = 0
    length=len(jobs)

    # 1. 처리를 빨리할수 있는 작업을 기준으로 정렬함
    jobs=sorted(jobs,key= lambda x:x[1])



    next_time=0
    while len(jobs)!=0:
          flag=False
          for i in range(len(jobs)):
            start_time,end_time=jobs[i]

            # 현재 처리를 할수있으면 처리
            if start_time<=next_time :
               next_time+=end_time
               answer+=next_time-start_time
               jobs.pop(i)
               flag=True
               break

          # 시간이 안맞아서 처리를 할수없는게있으면 시간 추가
          if flag==False:
              next_time+=1


    answer = answer//length
    return answer

solution([[0, 3], [1, 9], [2, 6]])
solution([[0, 3], [4, 4], [5, 3], [4, 1]])