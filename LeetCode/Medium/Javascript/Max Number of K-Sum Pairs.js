/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let answer = 0;
  while (start < end) {
    if (nums[start] + nums[end] === k) {
      start += 1;
      end -= 1;
      answer += 1;
    } else if (nums[start] + nums[end] < k) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return answer;
};

maxOperations([1, 2, 3, 4], 5);
