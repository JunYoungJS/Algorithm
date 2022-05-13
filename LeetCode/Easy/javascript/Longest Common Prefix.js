/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length + b.length);
  let answer_list = [];
  let word = strs[0];
  let answer = 0;
  for (let i = 0; i < word.length; i++) {
    let word_b = word.slice(0, i + 1);
    let flag = true;
    for (let j = 0; j < strs.length; j++) {
      var word_a = strs[j].slice(0, i + 1);
      if (word_a !== word_b) {
        flag = false;
      }
    }
    if (flag) {
      answer_list.push(word_a);
    }
  }
  answer_list.sort((a, b) => b.length - a.length);
  if (answer_list.length === 0) {
    return "";
  }
  return answer_list[0];
};
