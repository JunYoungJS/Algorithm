/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  });
  const mapToArray = [...map];
  const answer = [];
  mapToArray.sort((a, b) => b[1] - a[1]);
  console.log(mapToArray);
  for (let i = 0; i < k; i++) {
    answer.push(mapToArray[i][0]);
  }
  return answer;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
