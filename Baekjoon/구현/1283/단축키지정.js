const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .split("\n");

const answer = [];
const n = +input[0];
const keywords = new Map();
const optionList = input.slice(1, input.length);

const checkFirstWordKey = (tmp) => {
  let newWord = "";
  const words = [...tmp];
  let idx = 0;
  while (words.length) {
    const word = words.shift();
    if (word.length === 0) {
      idx += 1;
      continue;
    }

    const check = keywords.has(word[0].toUpperCase());
    const check2 = keywords.has(word[0].toLowerCase());

    if (!check && !check2) {
      const upper = word[0].toUpperCase();
      const lower = word[0].toLowerCase();
      keywords.set(upper, 1);
      keywords.set(lower, 1);
      newWord += `[${word[0]}]`;
      newWord += word.substring(1, word.length);
      tmp[idx] = newWord;
      break;
    }
    idx += 1;
  }

  if (newWord.length) {
    let answer = tmp.join(" ");
    return answer;
  } else {
    return 0;
  }
};

const otherFindkey = (tmp) => {
  let newWord = "";
  const words = [...tmp];
  let idx = 0;
  while (words.length) {
    const word = words.shift();
    for (let i = 0; i < word.length; i++) {
      const check = keywords.has(word[i].toUpperCase());
      const check2 = keywords.has(word[i].toLowerCase());
      if (!check && !check2) {
        const upper = word[i].toUpperCase();
        const lower = word[i].toLowerCase();
        keywords.set(upper, 1);
        keywords.set(lower, 1);
        newWord =
          word.substring(0, i) +
          `[${word[i]}]` +
          word.substring(i + 1, word.length);

        tmp[idx] = newWord;
        break;
      }
    }
    if (newWord.length) break;
    idx += 1;
  }
  return tmp.join(" ");
};

for (let i = 0; i < optionList.length; i++) {
  const option = optionList[i].split(" ");
  const checkFirstkey = checkFirstWordKey(option);
  if (!checkFirstkey) {
    const otherFindWord = otherFindkey(option);
    answer.push(otherFindWord);
  } else {
    answer.push(checkFirstkey);
  }
}
answer.forEach((e) => console.log(e));
