/**
 * @param {string} digits
 * @return {string[]}
 */
let answer = [];

var dfs = function (phoneNumber, digits, idx, numberList) {
  if (phoneNumber.length == digits.length) {
    answer.push(phoneNumber);
    return;
  } else {
    const tmp = numberList[+digits[idx]];
    for (let i = 0; i < tmp.length; i++) {
      dfs(phoneNumber + tmp[i], digits, idx + 1, numberList);
    }
  }
};

var letterCombinations = function (digits) {
  answer = [];
  const numberList = [
    [0],
    [0],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  if (digits.length === 0) {
    return [];
  }

  dfs("", digits, 0, numberList);

  return answer;
};

letterCombinations("");
