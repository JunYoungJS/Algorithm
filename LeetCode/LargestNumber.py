class Solution(object):
    def largestNumber(self, nums):

        for i in range(len(nums),0,-1):
            for j in range(0,i-1):
                front=str(nums[j])+str(nums[j+1])
                back=str(nums[j+1])+str(nums[j])
                if front<back:
                    nums[j],nums[j+1]=nums[j+1],nums[j]

        answer=""
        for i in nums:
            answer+=str(i)

        return str(int(answer))