# -*- coding: utf-8 -*-
def solution(record):
    answer = []
    nick_name_list={}

    for i in record:
        tmp=i.split(' ')

        if tmp[0]=="Enter":
            nick_name_list[tmp[1]]=tmp[2]

       
        elif tmp[0]=='Change':
             nick_name_list[tmp[1]]=tmp[2]


    for i in record:
        tmp=i.split()
        if tmp[0]=='Enter':
            answer.append('%s님이 들어왔습니다.'%nick_name_list[tmp[1]])

        elif tmp[0]=='Leave':
            answer.append('%s님이 나갔습니다.'%nick_name_list[tmp[1]])


    return answer


solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])