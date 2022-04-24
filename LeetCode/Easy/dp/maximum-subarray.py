class Solution(object):
    def maxSubArray(self, nums):
        dp=[-9999999]*(len(nums)+1)
        dp[0]=nums[0]
        for i in range(1,len(nums)):
            dp[i]=max(nums[i],dp[i-1]+nums[i])


        return max(dp)