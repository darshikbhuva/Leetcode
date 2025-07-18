let grid = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 26, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];

function missingAndRepeted(grid) {
  grid = grid.flat();
  grid = grid.sort();
  let arr = [];
  let sum = 0;
  let sum2 = 0;

  for (i = 0; i < grid.length; i++) {
    sum += grid[i];
    sum2 += i + 1;
    if (grid[i] === grid[i + 1]) {
      var du = grid[i];
      arr.push(grid[i]);
    }
  }

  let sum3 = sum2 - sum;
  let final = sum3 + du;
  arr.push(final);
  return arr;
}

console.log(missingAndRepeted(grid));
