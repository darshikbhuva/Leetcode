let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function findDiagonalOrder(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let result = new Array(rows + cols - 1).fill(null).map(() => []);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) result[i + j].unshift(mat[i][j]);
      else result[i + j].push(mat[i][j]);
    }
  }

  return result.flat();
}

console.log(findDiagonalOrder(mat));
