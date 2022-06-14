/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let [row, col] = [0, 0];
  if (word1.length > word2.length) {
    col = word1.length;
    row = word2.length;
  } else {
    col = word2.length;
    row = word1.length;
    const tmp = word1;
    word1 = word2;
    word2 = tmp;
  }
  const dp = Array.from(new Array(row + 1), () => new Array(col + 1).fill(0));
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (word2[i - 1] === word1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  let answer = word1.length - dp[row][col] + word2.length - dp[row][col];
  return answer;
};

minDistance("food", "money");
