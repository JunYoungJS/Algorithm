/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
// 전체 모든배열의합 - X 를 만드는수는 X를 0으로 만든다.

var minOperations = function (nums, x) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  let answer = -1;
  let start = 0;
  let end = 0;
  let res = 0;
  while (start < nums.length) {
    res += nums[start];
    //
    while (end < nums.length && total - x < res) {
      res -= nums[end];
      end += 1;
    }
    if (total - res === x) {
      answer = Math.max(answer, start - end + 1);
    }
    start += 1;
  }
  if (answer === -1) {
    return -1;
  }
  return nums.length - answer;
};

minOperations([1, 1], 3);
