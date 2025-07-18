let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

function zero(matrix) {
  let x = new Set();
  let y = new Set();

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        x.add(i);
        y.add(j);
      }
    }
  }

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (x.has(i) || y.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}

console.log(zero(matrix));
