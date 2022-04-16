import sys


def solution(line):
    answer = []
    tmp = set()
    min_x = sys.maxsize
    min_y = sys.maxsize
    max_x = -sys.maxsize
    max_y = -sys.maxsize

    for i in range(len(line)):
        a, b, e = line[i]
        for j in range(i + 1, len(line)):
            c, d, f = line[j]
            m = float(a * d - b * c)
            if m == 0: continue

            x = float(b * f - e * d) / m
            y = float(e * c - a * f) / m

            if int(x) == x and int(y) == y:
                max_x = int(max(x, max_x))
                max_y = int(max(y, max_y))
                min_x = int(min(x, min_x))
                min_y = int(min(y, min_y))
                tmp.add((int(x), int(y)))

    for i in range(max_y, min_y - 1, -1):
        l=""
        for j in range(min_x, max_x + 1):
            if (j, i) in tmp:
                l+='*'
            else:
                l+='.'

        answer.append(l)


    return answer