import itertools
def check_id(ban_id_list,banned_id):
    ban_id_list=list(ban_id_list)


    for i in range(len(ban_id_list)):
        if check_alphs(ban_id_list[i],banned_id[i])==False:
            return False





    return True

def check_alphs(a,b):
    if len(a) != len(b):
        return False

    for idx in range(len(a)):
        if a[idx]!=b[idx]:
            if b[idx]!='*':
                return False



    return True


def solution(user_id, banned_id):
    answer = []

    # user_id로 banned_id가 될수있는 조합을 만들면됨 이떄 퍼뮤테이션으로 해야 길이조건을 안따질수있음


    #  1. 컴비네이션으로 하면 조건에 맞는 답을 찾기가 까다로워짐 퍼뮤테이션으로 할경우 쉽게 처리가능 
    ban_list=list(itertools.permutations(user_id,len(banned_id)))



    for ban_id_list in ban_list:
        if check_id(ban_id_list,banned_id):
            ban_id_list=set(ban_id_list)

            if ban_id_list not in answer:
                answer.append(ban_id_list)


    return len(answer)




##solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "abc1**"])
