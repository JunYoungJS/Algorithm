/**
 * @param {string} s
 * @return {number}
 */

const isValid = (s) => {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    if (s[start] === s[end]) {
      start += 1;
      end -= 1;
    } else {
      return false;
    }
  }

  return true;
};

const removePalindromeSub = (s) => {
  //  현재 주어진 문자열이 팰린드롬이면 한단계거침
  // 현재 주어진 문자열이 팰린드롬이 아니면 무조건 두단계만에 다지울수있음
  // 그이유는 모든 서브스트링을 한번에 지울수있기떄문에

  if (isValid(s)) {
    return 1;
  } else {
    return 2;
  }
};
