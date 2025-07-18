mat = [
  [0, 0, 0],
  [0, 1, 1],
];

function matCount(mat) {
  let result = [];

  for (i = 0; i < mat.length; i++) {
    let count = 0;
    for (j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
    result.push(count);
  }

  let max = Math.max(...result);
  let index = result.indexOf(max);

  return [index, max];
}
console.log(matCount(mat));
