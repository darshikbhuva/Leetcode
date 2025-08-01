let grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];

function largestLocal(grid) {
  let res = [];

  for (let k = 0; k < grid.length - 2; k++) {
    let temp = [];
    for (let z = 0; z < grid[k].length - 2; z++) {
      let max = -Infinity;

      for (let i = k; i < k + 3; i++) {
        for (let j = z; j < z + 3; j++) {
          max = Math.max(max, grid[i][j]);
        }
      }
      temp.push(max);
    }
    res.push(temp);
  }

  return res;
}

console.log(largestLocal(grid));
