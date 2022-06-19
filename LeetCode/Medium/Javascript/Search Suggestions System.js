/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  let answer = [];
  for (let i = 0; i < searchWord.length; i++) {
    const word = searchWord.substring(0, i + 1);
    const array = products.filter((n) => n.substring(0, i + 1) === word);
    answer.push([...array].slice(0, 3));
  }
  return answer;
};

suggestedProducts(
  ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
  "mouse",
  "mouse"
);
