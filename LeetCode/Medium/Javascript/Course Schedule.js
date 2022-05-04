/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// 싸이클이 형성되는 곳이 있으면 false
var answer = true;
var dfs = function (start, current, visited, graph) {
  visited[current] = true;
  for (let i = 0; i < graph[current].length; i++) {
    const next = graph[current][i];
    if (visited[next] && next === start) {
      answer = false;
      return;
    }
    if (!visited[next]) {
      dfs(start, next, visited, graph);
    }
  }
};

var canFinish = function (numCourses, prerequisites) {
  let graph = new Array(numCourses);
  answer = true;
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  prerequisites.forEach((e) => {
    graph[e[0]].push(e[1]);
  });
  for (let i = 0; i < numCourses; i++) {
    let visited = new Array(numCourses);
    if (answer == false) {
      break;
    }
    if (!visited[i]) {
      dfs(i, i, visited, graph);
    }
  }
  return answer;
};
