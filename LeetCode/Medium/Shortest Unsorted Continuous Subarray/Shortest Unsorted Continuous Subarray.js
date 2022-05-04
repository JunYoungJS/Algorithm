/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. 정렬을 하고 기존 배열과 비교를하여 start지점 end지점해서 서로다른 구간이나온곳이
// subarray
var findUnsortedSubarray = function (nums) {
  const sortArray = [...nums];
  sortArray.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let startIdx = 0;
  let endIdx = 0;
  while (start < nums.length) {
    if (nums[start] != sortArray[start]) {
      startIdx = start;
      break;
    }
    start += 1;
  }

  while (end >= 0) {
    if (nums[end] != sortArray[end]) {
      endIdx = end;
      break;
    }
    end -= 1;
  }
  let answer = end - start;
  if (answer < 0) {
    answer = 0;
  } else {
    answer += 1;
  }

  return answer;
};

findUnsortedSubarray([1, 2, 3, 4]);
