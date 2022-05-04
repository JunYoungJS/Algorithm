/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let graph = new Array(numCourses);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  prerequisites.forEach((e) => {
    graph[e[0]].push(e[1]);
    console.log(e[0], e[1]);
  });

  console.log(graph);
};

canFinish(2, [
  [1, 0],
  [0, 1],
]);
