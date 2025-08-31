let mat = [[1, 2]];
let r = 1;
let c = 1;

function matrixReshape(mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;
  if (m * n !== r * c) return mat;
  let arr = [];
  const result = Array.from({ length: r }, () => new Array(c).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr.push(mat[i][j]);
    }
  }

  let k = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      result[i][j] = arr[k++];
    }
  }

  return result;
}

console.log(matrixReshape(mat, r, c));
