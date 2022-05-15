import collections
class Solution(object):
    def bfs(self,start,visited,graph):
        queue=collections.deque()
        queue.append(start)
        visited[start]=0

        while queue:
            cur=queue.popleft()
            for n in graph[cur]:
                other,w=n
                if visited[other]==-1 or w+visited[cur]<visited[other]:
                    visited[other]=visited[cur]+w
                    queue.append(other)


        return
    def networkDelayTime(self, times, n, k):
        graph=[[] for _ in range(n+1)]
        visited=[-1]*(n+1)

        for i in times:
            [my,other,w]=i
            graph[my].append([other,w])


        self.bfs(k,visited,graph)
        for i in range(1,n+1):
            if visited[i]==-1:
                return -1

        return max(visited)