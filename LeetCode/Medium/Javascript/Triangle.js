/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length);
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = new Array(triangle[i].length).fill(0);
  }
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + triangle[i][j],
          dp[i - 1][j] + triangle[i][j]
        );
      }
    }
  }
  let answer = Infinity;
  for (let i = 0; i < triangle[triangle.length - 1].length; i++) {
    answer = Math.min(answer, dp[triangle.length - 1][i]);
  }
  return answer;
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
