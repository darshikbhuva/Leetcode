let mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

function diagoanalSum(mat) {
  let n = mat.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    if (i !== n - 1 - i) {
      sum += mat[i][n - 1 - i];
    }
  }

  return sum;
}

console.log(diagoanalSum(mat));
