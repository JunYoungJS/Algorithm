import itertools
import copy

def operator(a,b,op):
    if op=='*':
        return a*b

    elif op=='-':
        return a-b

    elif op=='+':
        return a+b

def strToList(a):
    tmp=""
    new_list=[]
    for i in a:
        if i.isdigit():
            tmp+=i

        else:
            new_list.append(int(tmp))
            tmp=""
            new_list.append(i)

    if len(tmp)!=0:
        new_list.append(int(tmp))

    return new_list

def solution(expression):
    answer = 0
    op_per=['*','-','+']


    op_per=list(itertools.permutations(op_per))
    for ops in op_per:
        tmp=copy.deepcopy(expression)
        tmp=strToList(tmp)

        for op in ops:
            while len(tmp)!=1:
                  if op not in tmp:break
                  op_idx=tmp.index(op)
                  tmp.pop(op_idx)
                  a=tmp.pop(op_idx)
                  b=tmp.pop(op_idx-1)
                  number=operator(b,a,op)
                  tmp.insert(op_idx-1,number)

        answer=max(abs(tmp[0]),answer)

    return answer



##solution("100-200*300-500+20")
solution("50*6-3*2")