class Solution(object):
    def countBits(self, n):
        dp=[0]*(n+1)
        if n>=0:
            dp[0]=0
        if n>=1:
            dp[1]=1
        if n>=2:
            dp[2]=1
        
        for i in range(3,n+1):
            if i%2==0:
                dp[i]=dp[i//2]
            else:
                dp[i]=dp[i-1]+1

        return dp


#  2로 나누어떨어지나 안떨어지나에 따라 규칙이 보임 