/**
 * @param {number} n
 * @return {string[]}
 */
var answer = [];
var backtraking = function (depth, p, max_depth, open, close) {
  if (depth == max_depth * 2) {
    answer.push(p);
    return;
  }

  if (open < max_depth) {
    backtraking(depth + 1, p + "(", max_depth, open + 1, close);
  }
  if (close < open) {
    backtraking(depth + 1, p + ")", max_depth, open, close + 1);
  }
};
var generateParenthesis = function (n) {
  answer = [];
  backtraking(0, "", n, 0, 0);
  return answer;
};
