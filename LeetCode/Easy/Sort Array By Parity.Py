class Solution(object):
    def sortArrayByParity(self, nums):
        left=0
        right=len(nums)-1

        while left<right:
              if nums[left]%2!=0:
                  tmp = nums[right]
                  nums[right] = nums[left]
                  nums[left] = tmp
                  right-=1

              else:
                  left+=1

        return nums

a=Solution()
a.sortArrayByParity([0,1])