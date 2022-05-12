# 중복된요소가 나오지 않는 부분 문자열 구하기 
class Solution(object):
    def partitionLabels(self, s):

        # 1. 해당 문자의  끝나는 idx값을 저장 
        last_idx=dict()
        for i in range(len(s)):
            if s[i] not in last_idx:
                last_idx[s[i]]=i
            else:
                last_idx[s[i]] = i


        start,end=0,0

        max_idx=last_idx[s[0]]
        answer=[]
        while end!=len(s):
              max_idx=max(last_idx[s[end]],max_idx)
              if end==max_idx:
                  answer.append((end-start)+1)
                  start=end+1
                  end=start
              else:
                   end+=1


        return answer

