let mat = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
];

function diagonalSort(mat) {
  let m = mat.length;
  let n = mat[0].length;

  let diagonals = new Map();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let key = i - j;
      if (!diagonals.has(key)) diagonals.set(key, []);
      diagonals.get(key).push(mat[i][j]);
    }
  }

  for (let [key, arr] of diagonals) {
    arr.sort((a, b) => b - a);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let key = i - j;
      mat[i][j] = diagonals.get(key).pop();
    }
  }

  return mat;
}

console.log(diagonalSort(mat));
