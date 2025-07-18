let grid = [
  [4, 3, 2, -1, 0],
  [3, 2, 1, -1, 0],
  [1, 1, -1, -2, 0],
  [-1, -1, -2, -3, 0],
];

function countNegativeNumber(grid) {
  let n = grid.length; // grid length == 4
  let m = grid[0].length; // inside grid one row length == 5
  let count = 0; //count
  let r = n - 1; //row
  let c = 0; //column

  while (r >= 0 && c < m) {
    if (grid[r][c] < 0) {
      r--;
      count += m - c;
    } else {
      c++;
    }
  }

  return count;
}

console.log(countNegativeNumber(grid));

// time complexity O(n+m)
