var hasAllCodes = function (s, k) {
  let answer = new Set();

  for (let i = k; i <= s.length; i++) {
    const str = s.slice(i - k, i);
    answer.add(str);
  }

  if (answer.size === Math.pow(2, k)) {
    return true;
  }

  return false;
};
