let original = [1, 2, 3, 4];
let m = 2;
let n = 2;

function construct2DArray(original, m, n) {
  if (original.length != m * n) {
    return [];
  }
  let k = 0;
  let result = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = original[k];
      k++;
    }
  }

  return result;
}

console.log(construct2DArray(original, m, n));
