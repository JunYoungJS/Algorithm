# -*- coding: utf-8 -*-

import sys
n=int(sys.stdin.readline())
month_days=[0,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

start_year=2019
start_day=0
answer=0

for year in range(start_year,n+1):
    for month in range(1,13):
        if ((start_day+13)%7==4):
            answer+=1

        if month==2:
            if year%400==0 or (year%100!=0 and year%4==0):
                start_day+=29
            else:
                start_day+=month_days[month]

        else:
             start_day+=month_days[month]

print(answer)