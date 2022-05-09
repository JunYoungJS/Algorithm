var twoSum = function (nums, target) {
  for (let start = 0; start < nums.length; start++) {
    let end = start + 1;
    while (end < nums.length) {
      if (nums[start] + nums[end] === target) {
        return [start, end];
      } else {
        end += 1;
      }
    }
  }
};
