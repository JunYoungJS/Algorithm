/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  // 1. 포인터 세개둠
  let n1 = m - 1;
  let n2 = n - 1;
  let k = m + n - 1;
  // 2. nums1에 n1 포인터 nums2에 n2포인터
  // k는 바뀔값위치
  // 둘이비교해서 큰값을 k에 넣음

  while (n1 >= 0 && n2 >= 0) {
    if (nums1[n1] < nums2[n2]) {
      nums1[k] = nums2[n2];
      n2 -= 1;
    } else {
      nums1[k] = nums1[n1];
      n1 -= 1;
    }

    k -= 1;
  }
  // 남는 숫자들을 넣음
  while (n2 >= 0) {
    nums1[k] = nums2[n2];
    n2 -= 1;
    k -= 1;
  }
  return nums1;
};
