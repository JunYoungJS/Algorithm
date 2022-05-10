/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var dfs = function (k, n, numbers, total, answer) {
  if (numbers.length === k) {
    if (total === n) {
      numbers.sort((a, b) => a - b);
      answer.add([...numbers]);
    }
    return;
  } else {
    for (let i = 1; i <= 9; i++) {
      if (!numbers.includes(i) && total + i <= n) {
        total += i;
        numbers.push(i);
        dfs(k, n, numbers, total, answer);
        total -= i;
        const idx = numbers.indexOf(i);
        numbers.splice(idx, 1);
      } else {
        return;
      }
    }
  }
};
var combinationSum3 = function (k, n) {
  let tmp = [];
  answer = new Set();
  dfs(k, n, tmp, 0, answer);
  answer = [...answer];
  return answer;
};
