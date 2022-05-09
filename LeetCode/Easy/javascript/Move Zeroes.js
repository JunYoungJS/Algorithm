/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue;
    start = i + 1;
    while (start < nums.length && nums[start] === 0) {
      start += 1;
    }
    if (start === nums.length) break;
    nums[i] = nums[start];
    nums[start] = 0;
  }
  return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
