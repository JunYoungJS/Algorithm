/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// dp[i] = i번쨰까지 의 문자열이 word Dict에 존재하는지
// 나중에 다시 풀기
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= i; j++) {
      const sliceWord = s.slice(j, i);
      if (dp[j] && wordDict.includes(sliceWord)) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

wordBreak("leetcode", ["leet", "code"]);
