class Solution(object):
    def maxProfit(self, prices):
        dp=[0]*(len(prices)+1)
        start=0

        for i in range(1,len(prices)):
            if prices[i]-prices[start]<0:
                start = i


            else:
                dp[start]=max(dp[start],prices[i]-prices[start])


        return max(dp)