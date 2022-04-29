class Solution(object):
    def countVowelStrings(self, n):
        dp=[[0]*5 for i in range(n)]
        dp[0][0]=1
        dp[0][1] = 1
        dp[0][2] = 1
        dp[0][3] = 1
        dp[0][4] = 1

        for i in range(1,n):
            dp[i][0]=dp[i-1][0]+dp[i-1][1]+dp[i-1][2]+dp[i-1][3]+dp[i-1][4]
            dp[i][1]=dp[i-1][1]+dp[i-1][2]+dp[i-1][3]+dp[i-1][4]
            dp[i][2]= dp[i-1][2]+dp[i-1][3]+dp[i-1][4]
            dp[i][3] =dp[i-1][3]+dp[i-1][4]
            dp[i][4] =dp[i-1][4]


        answer=dp[n-1][0]+dp[n-1][1]+dp[n-1][2]+dp[n-1][3]+dp[n-1][4]

        return answer
