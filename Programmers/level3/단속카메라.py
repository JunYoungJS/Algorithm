def solution(routes):
    answer = 1

  
    routes.sort(key= lambda x:(x[1]))
    s=routes[0][1]


    for i in range(1,len(routes)):
        start,end=routes[i]
        if start<=s:
            continue
        else:
             answer+=1
             s=end

    return answer

solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]])