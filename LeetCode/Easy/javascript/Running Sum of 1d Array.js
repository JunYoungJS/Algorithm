/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums[i];
};

runningSum([1, 2, 3, 4]);
