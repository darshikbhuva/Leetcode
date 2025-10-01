let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let k = 1;

function matrixBlockSum(mat, k) {
  let rows = mat.length;
  let cols = mat[0].length;
  let arr = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      for (let y = 0; y < mat.length; y++) {
        for (let z = 0; z < mat[0].length; z++) {
          if (y - k <= i && i <= y + k && z - k <= j && j <= z + k) {
            sum += mat[y][z];
          }
        }
      }

      arr[i][j] = sum;
    }
  }

  return arr;
}

console.log(matrixBlockSum(mat, k));
