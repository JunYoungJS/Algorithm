import itertools

def solution(k, dungeons):
    answer = -1
    combi=[]
    for i in range(len(dungeons)):
        combi.append(i)

    combi=list(itertools.permutations(combi, len(dungeons)))
    for i in combi:
        my_hp=k
        cnt=0
        for j in i:
            if dungeons[j][0]<=my_hp:
                my_hp-=dungeons[j][1]
                cnt+=1

        answer=max(cnt,answer)




    return answer
