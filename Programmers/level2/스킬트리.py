def solution(skill, skill_trees):
    answer = 0
    tmp=[]
    for i in skill:tmp.append(i)
    for i in skill_trees:
        idx = 0
        flag=False
        for j in range(len(i)):
            if idx==len(tmp):
                break
            if i[j]!=skill[idx]:
                if i[j] in tmp:
                    flag=True
                    break
            else:
                if i[j] in tmp:
                   idx+=1



        if flag==False:
            answer+=1


    return answer


solution("CBD",["BACDE", "CBADF", "AECB", "BDA"])