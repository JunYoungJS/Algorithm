/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let answer = 0;
  while (num != 0) {
    if (num % 2 == 0) {
      num = Math.floor(num / 2);
    } else {
      num -= 1;
    }
    answer += 1;
  }
  console.log(answer);
};

numberOfSteps(123);
