/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let answer = 0;
  let end = 0;
  let tmp = [];
  for (let i = 0; i < s.length; i++) {
    while (end < s.length) {
      if (!tmp.includes(s[end])) {
        tmp.push(s[end]);
        end += 1;
      } else {
        break;
      }
    }

    answer = Math.max(answer, end - i);
    tmp = tmp.filter((e) => e !== s[i]);
  }
  return answer;
};

lengthOfLongestSubstring("pwwkew");
