class Solution(object):
    def sort_alpha(self,alpha):
        tmp=list(alpha)
        tmp.sort()
        return "".join(tmp)
    def groupAnagrams(self, strs):
        anagrams=dict()
        for i in strs:
            s=self.sort_alpha(i)
            if s not in anagrams:
                anagrams[s]=[i]
            else:
                anagrams[s].append(i)

        answer=[]
        for i in anagrams.keys():
            answer.append(anagrams[i])

        return answer