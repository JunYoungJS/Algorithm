import sys
n,k = map(int,sys.stdin.readline().split())
moneys=[]
answer=0
money_cnt=dict()
while n!=0:
      money=int(input())
      moneys.append(money)
      money_cnt[money]=0
      n-=1

moneys.sort(reverse=True)
idx=0
while k!=0:
      if moneys[idx]>k:
          idx+=1
          continue
      else:
           money=moneys[idx]
           k-=money
           money_cnt[money]+=1



for i in money_cnt.values():
    answer+=i

print(answer)