/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let start = 0;
  let end = 0;
  let answer = 0;
  let sum = 0;
  // 중복되지 않고 가장 합이 큰  서브 어레이 찾는 문제
  const numbers = new Set();
  // 포인터를 두개 둠
  // 1. 중복된 숫자가 나올떄까지 end 포인트 이동시킴
  while (start < nums.length && end < nums.length) {
    if (!numbers.has(nums[end])) {
      numbers.add(nums[end]);
      sum += nums[end];
      end += 1;
    } else {
      // 2. 중복된 숫자가나오면 정답을 갱신해주고 중복된 숫자가 나오기전까지 start포인터를 앞으로 이동시키고 숫자를 지워줌
      answer = Math.max(sum, answer);
      while (nums[start] != nums[end]) {
        sum -= nums[start];
        numbers.delete(nums[start]);
        start += 1;
      }
      sum -= nums[start];
      numbers.delete(nums[start]);
      start += 1;
    }
  }

  answer = Math.max(sum, answer);

  return answer;
};

//maximumUniqueSubarray([4, 2, 4, 5, 6]);
//maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]);
maximumUniqueSubarray([
  187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411, 459,
  490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610, 31, 585,
  970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670, 476, 278,
  775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434,
]);
