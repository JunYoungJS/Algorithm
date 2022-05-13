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
        # 2.end를 이동시키면서 끝나는 idx값이 가장 큰값을 저장함 이때 max_idx값과 end값이 같게되면 그 구간이 중복되지않는 문자열의파티션
        while end!=len(s):
              max_idx=max(last_idx[s[end]],max_idx)
              if end==max_idx:
                  answer.append((end-start)+1)
                  start=end+1
                  end=start
              else:
                   end+=1


        return answer

