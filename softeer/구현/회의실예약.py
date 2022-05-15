import sys
def input():
    return sys.stdin.readline().rstrip()

n,m=map(int,input().split())
answer=[]
answer_list=dict()
times=dict()
for i in range(n):
    a=input()
    times[a]=[]
    answer_list[a]=[]
    answer.append(a)

for i in range(m):
    name,start,end=map(str,input().split())
    start=int(start)
    end=int(end)
    times[name].append([start,end])
    times[name].sort()


answer.sort()
for i in answer:
    start=9
    for j in times[i]:
        if start!=j[0]:
            answer_list[i].append([start,j[0]])
            start=j[1]
        else:
            start=j[1]

    if start!=18:
        answer_list[i].append([start,18])

cnt=1
for key in answer:
    print("Room {}:".format(key))
    if len(answer_list[key])==0:
        print("Not available")

    else:
        print("{} available:".format(len(answer_list[key])))
        for i in answer_list[key]:
            start,end=i
            if start==9:
                print("09-{}".format(end))
            else:
                print("{}".format(start)+"-{}".format(end))

    if cnt!=n:
        print("-----")

    cnt+=1