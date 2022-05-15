import sys
def input():
    return sys.stdin.readline().rstrip()

numbers=list(map(int,input().split()))

ascending=True
descending=True
for i in range(1,9):
    if numbers[i-1]!=i:
        ascending=False

for i in range(8,0,-1):
    if numbers[8-i]!=i:
        descending=False



if ascending:
    print("ascending")
elif descending:
    print("descending")
else:
    print("mixed")
