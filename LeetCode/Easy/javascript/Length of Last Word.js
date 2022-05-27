/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.split(" ");
  s = s.filter((str) => {
    return str.length != 0;
  });

  const lastWord = s[s.length - 1];

  return lastWord.length;
};
