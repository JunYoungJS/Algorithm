import sys

def input():
    return sys.stdin.readline().rstrip()


n,m,k=map(int,input().split())
check_list=list(map(int,input().split()))
buttons=list(map(int,input().split()))

end=0
answer="normal"
for start in range(len(buttons)):
    end=start
    idx=0
    while end<len(buttons) and idx<len(check_list):
        if buttons[end]!=check_list[idx]:
           break

        idx+=1
        end+=1


    if idx == n:
        answer = "secret"
        break


print(answer)