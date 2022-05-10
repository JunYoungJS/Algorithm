/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  row = matrix.length;
  const array = [];
  for (let i = 0; i < row; i++) {
    const tmp = [];
    for (let j = 0; j < row; j++) {
      array.push(matrix[row - j - 1][i]);
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
      matrix[i][j] = array.shift();
    }
  }

  return matrix;
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
