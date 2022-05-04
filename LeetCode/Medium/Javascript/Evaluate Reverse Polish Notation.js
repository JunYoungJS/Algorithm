/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(+token);
    } else {
      b = stack.pop();
      a = stack.pop();
      if (token == "*") {
        stack.push(a * b);
      } else if (token == "/") {
        stack.push(parseInt(a / b));
      } else if (token == "+") {
        stack.push(a + b);
      } else {
        stack.push(a - b);
      }
    }
  });
  return stack[0];
};

evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
