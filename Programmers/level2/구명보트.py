def solution(people, limit):
    answer = 0
    start=0
    end=len(people)-1
    people.sort()

    while start<=end:
          if people[start]+people[end]>limit:
              answer+=1
              end-=1
          else:
              start+=1
              end-=1
              answer+=1



    return answer


solution([70,80,50],100)