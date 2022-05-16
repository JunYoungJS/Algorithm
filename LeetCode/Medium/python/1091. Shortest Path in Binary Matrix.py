import collections

class Solution(object):
    def bfs(self,x,y,grid):
        dx = [-1, 0, 1, 0, 1, 1, -1, -1]
        dy = [0, 1, 0, -1, 1, -1, 1, -1]
        queue=collections.deque()
        n=len(grid)
        visited=[[-1]*n for _ in range(n)]
        queue.append([x,y])
        visited[x][y]=0

        while queue:
              cur_x,cur_y=queue.popleft()
              for i in range(8):
                  if cur_x==n-1 and cur_y==n-1:
                      return visited[n-1][n-1]+1

                  nx=dx[i]+cur_x
                  ny=dy[i]+cur_y
                  if nx<0 or ny<0 or nx>=n or ny>=n:continue
                  if visited[nx][ny]==-1 and grid[nx][ny]==0:
                      visited[nx][ny]=visited[cur_x][cur_y]+1
                      queue.append([nx,ny])


        return -1

    def shortestPathBinaryMatrix(self, grid):
        if grid[0][0]==1:
            return -1

        return self.bfs(0,0,grid)
