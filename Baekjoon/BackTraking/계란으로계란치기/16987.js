const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

let t = +input.shift();
let weight = [];
let durable = [];
let answer = 0;

while (input.length != 0) {
  let tmp = input.shift().split(" ");
  weight.push(+tmp[1]);
  durable.push(+tmp[0]);
}

const dfs = (cur) => {
  if (cur == t) {
    let cnt = 0;
    for (let i = 0; i < durable.length; i++) {
      if (durable[i] <= 0) {
        cnt += 1;
      }
    }
    answer = Math.max(answer, cnt);
    return;
  }

  if (durable[cur] <= 0) dfs(cur + 1);
  else {
    let flag = false;
    for (let i = 0; i < weight.length; i++) {
      if (i == cur || durable[i] <= 0) {
        continue;
      }
      flag = true;
      durable[cur] = durable[cur] - weight[i];
      durable[i] = durable[i] - weight[cur];
      dfs(cur + 1);
      durable[cur] = durable[cur] + weight[i];
      durable[i] = durable[i] + weight[cur];
    }
    if (flag == false) {
      dfs(t);
    }
  }
};
dfs(0);
console.log(answer);
