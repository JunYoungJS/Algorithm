/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let answer = [];
var dfs = function (start, graph, visited, cur) {
  if (start === graph.length - 1) {
    answer.push([...cur]);
    return;
  }

  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (!visited[next]) {
      visited[next] = true;
      cur.push(next);
      dfs(next, graph, visited, cur);
      cur.pop();
      visited[next] = false;
    }
  }
};

var allPathsSourceTarget = function (graph) {
  answer = [];
  const visited = new Array(graph.length).fill(0);
  visited[0] = true;
  dfs(0, graph, visited, [0]);

  return answer;
};

allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]);
