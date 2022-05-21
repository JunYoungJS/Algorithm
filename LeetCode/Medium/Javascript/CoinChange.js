/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(10002).fill(Infinity);
  //   1. 있는 코인들은 가지고있는데 1개면 필요
  for (const coin in coins) {
    dp[coins[coin]] = 1;
  }

  dp[0] = 0;
  coins.sort((a, b) => a - b);

  for (let i = 1; i <= amount; i++) {
    for (const j in coins) {
      let coin = coins[j];
      if (i <= coin) {
        break;
      }
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  const answer = dp[amount];
  if (answer === Infinity) {
    return -1;
  }
  return answer;
};
