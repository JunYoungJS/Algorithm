/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  let dp = new Map();
  for (let i = 0; i < words.length; i++) {
    dp.set(words[i], 1);
    let max_value = -Infinity;
    for (let j = 0; j < words[i].length; j++) {
      let a = words[i].substring(0, j) + words[i].substring(j + 1);
      if (dp.get(a) + 1 > max_value) {
        max_value = dp.get(a) + 1;
        dp.set(words[i], max_value);
      }
    }
  }
  dp = [...dp].sort((a, b) => b[1] - a[1]);
  return dp[0][1];
};

longestStrChain(["bdca", "bda", "ca", "dca", "a"]);
