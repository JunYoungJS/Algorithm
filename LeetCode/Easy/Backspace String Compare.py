class Solution(object):
    def backspaceCompare(self, s, t):
        s_t=[]
        t_s=[]
        for i in s:
            if i=='#' and len(s_t)!=0:
                s_t.pop()
            else:
                if len(s_t)==0 and i=='#':
                    continue

                s_t.append(i)

        for i in t:
            if i == '#' and len(t_s) != 0:
                t_s.pop()
            else:
                if len(t_s)==0 and i=='#':
                    continue

                t_s.append(i)


        s_word="".join(s_t)
        t_word="".join(t_s)

        if s_word==t_word:
            return True
        else:
            return False



a=Solution()
a.backspaceCompare("a##c","#a#c")