let grid = [[1], [2], [3]];

function satisfiesConditions(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check vertical condition
      if (i + 1 < rows && grid[i][j] !== grid[i + 1][j]) {
        return false;
      }
      // Check horizontal condition
      if (j + 1 < cols && grid[i][j] === grid[i][j + 1]) {
        return false;
      }
    }
  }

  return true;
}

console.log(satisfiesConditions(grid));
