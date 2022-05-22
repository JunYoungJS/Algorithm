class Solution:
    def countSubstrings(self, s):
        length= len(s)
        dp=[[0]*1001 for _ in range(1001)]
        if length<2:
            return length
        answer=0
        # dp[n][m] n~m까지 부분문자열이 팰린드롬인지
        for i in range(length):
            dp[i][i]=1
            answer+=1

        #길이가 2인문자열부터 확인
        for i in range(1, length):
            if s[i - 1] == s[i]:
                dp[i - 1][i] = 1
                answer += 1

        # 길이가 3인 문자열 부터 팰린드롬인지 확인

        for munja_length in range(3,length+1):
            for j in range((length-munja_length)+1):
                end=munja_length+j
                if s[j]!=s[end-1]:continue
                if dp[j+1][end-2]==1:
                    dp[j][end-1]=1
                    answer+=1


        return answer
