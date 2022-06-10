/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const list = [];

  let start = 0;
  let end = 0;
  let answer = 0;
  while (start <= end && start < s.length && end < s.length) {
    if (list.includes(s[end])) {
      answer = Math.max(answer, end - start);
      list.splice(s[start], 1);
      start += 1;
    } else {
      list.push(s[end]);
      end += 1;
    }
  }

  answer = Math.max(answer, end - start);
  return answer;
};

lengthOfLongestSubstring(" ");
