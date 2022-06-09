/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const answer = [];
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    if (numbers[start] + numbers[end] === target) {
      answer.push(start + 1);
      answer.push(end + 1);
      break;
    } else if (numbers[start] + numbers[end] > target) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return answer;
};
