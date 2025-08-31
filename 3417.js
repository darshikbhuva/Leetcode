let grid = [
  [1, 2, 1, 3],
  [5, 15, 7, 3],
  [10, 4, 14, 12],
];

function zigzagTraversal(grid) {
  let result = [];

  for (let i = 0; i < grid.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < grid[i].length; j++) {
        if (i === j || (i + j) % 2 === 0) {
          result.push(grid[i][j]);
        }
      }
    } else {
      for (let j = grid[i].length - 1; j >= 0; j--) {
        if (i === j || (i + j) % 2 === 0) {
          result.push(grid[i][j]);
        }
      }
    }
  }

  return result;
}

console.log(zigzagTraversal(grid));
