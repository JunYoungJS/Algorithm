class Solution(object):
    def rob(self, nums):

        dp=[0]*(101)
        dp[0]=nums[0]
        if len(nums)>1:
            dp[1]=nums[1]

        for i in range(2,len(nums)):
            dp[i]=max(dp[i-2]+nums[i],dp[i-3]+nums[i])


        return max(dp)
