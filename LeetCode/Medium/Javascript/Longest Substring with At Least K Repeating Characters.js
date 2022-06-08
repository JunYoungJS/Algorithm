/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 속도느림

const isValid = (cnt, k) => {
  for (const key in cnt) {
    if (cnt[key] < k) {
      return false;
    }
  }
  return true;
};
var longestSubstring = function (s, k) {
  const alpha = new Array(26).fill(0);

  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt() - 97;
    alpha[idx] += 1;
  }

  for (let start = 0; start < s.length; start++) {
    const i = s[start].charCodeAt() - 97;
    const cnt = {};
    let end = start;
    if (alpha[i] < k) {
      continue;
    }
    while (end < s.length) {
      const idx = s[end].charCodeAt() - 97;
      if (alpha[idx] < k) {
        break;
      }
      if (cnt[s[end]] === undefined) {
        cnt[s[end]] = 1;
      } else {
        cnt[s[end]] += 1;
      }
      if (isValid(cnt, k)) {
        answer = Math.max(answer, end - start + 1);
      }
      end += 1;
    }
  }

  return answer;
};
longestSubstring("ababbc", 2);
