const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("input.txt").toString().split("\n");

const checkError = (str) => {
  str = str.split(" ");
  const findDipIdx = str.indexOf("dip");
  let [flag, flag2, flag3] = true;
  if (findDipIdx === -1) {
    return false;
  }

  if (findDipIdx + 1 < str.length && str[findDipIdx + 1] === "twirl") {
    return true;
  }

  if (findDipIdx - 1 >= 0 && str[findDipIdx - 1] === "jiggle") {
    return true;
  }

  if (findDipIdx - 2 >= 0 && str[findDipIdx - 2] === "jiggle") {
    return true;
  }
  return false;
};

const checkError2 = (str) => {
  str = str.split(" ");
  const findDipIdx = str.indexOf("clap");
  if (findDipIdx === -1) {
    return false;
  }

  if (findDipIdx + 1 < str.length && findDipIdx + 2 < str.length) {
    if (str[findDipIdx + 1] === "stomp" && str[findDipIdx + 2] === "clap") {
      return true;
    }
  }
  return false;
};

const checkError3 = (str) => {
  str = str.split(" ");
  const findtwirlIdx = str.indexOf("twirl");
  if (findtwirlIdx === -1) {
    return false;
  }
  if (findtwirlIdx + 1 < str.length && str[findtwirlIdx + 1] === "hop") {
    return true;
  }
  return false;
};

const checkError4 = (str) => {
  str = str.split(" ");

  if (str[0] === "jiggle") {
    return false;
  }
  return true;
};

const checkError5 = (str) => {
  str = str.split(" ");

  if (str.includes("dip")) {
    return true;
  }

  return false;
};
const answer = [];
for (let i = 0; i < input.length; i++) {
  const Error = [];
  if (!checkError(input[i])) {
    Error.push(1);
  }
  if (!checkError2(input[i])) {
    Error.push(2);
  }
  if (!checkError3(input[i])) {
    Error.push(3);
  }
  if (!checkError4(input[i])) {
    Error.push(4);
  }
  if (!checkError5(input[i])) {
    Error.push(5);
  }
  if (Error.length === 0) {
    answer.push(`form ok: ${input[i]}`);
  } else if (Error.length === 1) {
    answer.push(`form error ${Error[0]}: ${input[i]}`);
  } else {
    for (let i = 0; i < Error.length; i++) {}
  }
}
