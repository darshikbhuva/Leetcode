let grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
x = 1;
let y = 0;
let k = 3;
function reverseSubMatrix(grid) {
  let tempMat = Array.from({ length: k }, () => Array(k).fill(0));
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      tempMat[i][j] = grid[x + i][y + j];
    }
  }

  for (let top = 0, bottom = k - 1; top < bottom; top++, bottom--) {
    let temp = tempMat[top];
    tempMat[top] = tempMat[bottom];
    tempMat[bottom] = temp;
  }

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      grid[i + x][j + y] = tempMat[i][j];
    }
  }

  return grid;
}

console.log(reverseSubMatrix(grid));
