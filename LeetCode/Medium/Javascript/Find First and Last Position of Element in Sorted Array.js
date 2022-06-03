/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let l = lowerbound(nums, target);
  let r = upperbound(nums, target);

  if (l === r && nums[l] !== target && nums[r] !== target) {
    return [-1, -1];
  } else {
    return [l, r];
  }
};
// 첫번쨰 시작 원소
const lowerbound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let tmp = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      tmp = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return tmp;
};
// 마지막시작
const upperbound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let tmp = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      tmp = mid;
      left = mid + 1;
    } else {
      left = mid + 1;
    }
  }
  return tmp;
};
