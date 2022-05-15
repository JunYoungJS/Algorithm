class Solution(object):
    def maxArea(self, height):
        left,right=0,len(height)-1
        answer=0

        while left<right:
                if height[left]<=height[right]:
                    answer=max(abs(right-left)*height[left],answer)
                    left+=1
                else:
                    answer=max(abs(right-left)*height[right],answer)
                    right-=1


        return answer



s=Solution()
s.maxArea([1,1])
