class Solution(object):
    def dfs(self,nums,answer,numbers,visited,valid):
        if len(numbers) ==len(nums) and numbers not in valid:
            answer.append(list(numbers))
            valid.append(list(numbers))
            return
        else:
            for i in range(len(nums)):
                if visited[i]==False:
                    numbers.append(nums[i])
                    visited[i]=True
                    self.dfs(nums,answer,numbers,visited,valid)
                    visited[i]=False
                    numbers.pop()




    def permuteUnique(self, nums):
        answer = []
        visited=[False]*len(nums)
        answer_list = []

        self.dfs(nums,answer,[],visited,answer_list)


        return answer
