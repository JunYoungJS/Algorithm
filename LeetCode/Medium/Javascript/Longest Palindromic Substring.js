/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const dp = Array.from(new Array(1001), () => new Array(1001).fill(0));

  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
    answer = Math.max(answer, 1);
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      dp[i - 1][i] = 2;
      answer = Math.max(answer, 2);
    }
  }
  for (let i = 3; i <= s.length; i++) {
    for (let j = 0; j <= s.length - i; j++) {
      let end = i + j - 1; // 0 3 1 4
      if (s[j] === s[end]) {
        if (dp[j + 1][end - 1]) {
          dp[j][end] = i;
          answer = Math.max(dp[j][end], answer);
        }
      }
    }
  }
  for (let i = 0; i < 1001; i++) {
    for (let j = 0; j < 1001; j++) {
      if (answer === dp[i][j]) {
        return s.substring(i, j + 1);
      }
    }
  }
};
