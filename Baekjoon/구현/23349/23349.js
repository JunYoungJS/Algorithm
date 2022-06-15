const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
const n = +input[0];
input.shift();
let place_time = new Map();
const name_list = new Set();
for (let i = 0; i < input.length; i++) {
  let [name, place, start, end] = input[i].split(" ");
  start = +start;
  end = +end;
  if (!name_list.has(name)) {
    name_list.add(name); // 이름 제출 중복방지
    if (!place_time.has(place)) {
      // 1. 장소와 시작시간 출발시간을 넣어줌
      place_time.set(place, [[start, end]]);
    } else {
      const tmp = place_time.get(place);
      tmp.push([start, end]);
      place_time.set(place, tmp);
    }
  }
}

let tmp = [];

place_time.forEach((key, value) => {
  let m = 0;
  const time = new Array(50001).fill(0);

  //  해당 장소의 시간을 카운트해줌
  for (let i = 0; i < key.length; i++) {
    let [s, e] = key[i];
    for (let j = s; j < e; j++) {
      time[j] += 1;
      m = Math.max(time[j], m);
    }
  }

  // 카운트한것중 가장큰것의 시작점은 s로 끝나는점은 e로함
  let flag = false;
  let [s, e] = [0, 0];
  for (let i = 1; i <= 50000; i++) {
    if (time[i] === m && !flag) {
      s = i;
      flag = true;
    } else if (time[i] !== m && flag) {
      e = i;
      break;
    }
  }

  tmp.push([value, m, [s, e]]);
});

tmp.sort((a, b) => {
  if (a[1] > b[1]) {
    return -1;
  }
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  if (a[0] < b[0]) {
    return -1;
  }
});

console.log(`${tmp[0][0]} ${tmp[0][2][0]} ${tmp[0][2][1]}`);
