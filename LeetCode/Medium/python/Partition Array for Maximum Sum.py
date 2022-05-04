# coding=utf-8
class Solution(object):
    def maxSumAfterPartitioning(self, arr, k):
        n=len(arr)
        # n번쨰까지의 최대 합 저장
        dp=[0]*(n+1)
        for i in range(1,n+1):
            range_max_value=-9999999
            for j in range(1,min(i,k)+1):
                range_max_value=max(arr[i-j],range_max_value)
                dp[i]=max(dp[i-j]+range_max_value*(j),dp[i])

        return dp[n]