let grid = [
  [2, 4],
  [6, 8],
];

let x = 2;

function operation(grid, x) {
  let arr = [];

  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      arr.push(grid[i][j]);
    }
  }

  arr = arr.sort((a, b) => b - a);
  let size = arr.length;

  let n = Math.floor(size / 2);

  let target = arr[n];
  let result = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % x !== target % x) {
      return -1;
    }

    result += Math.abs(target - arr[i]) / x;
  }

  return result;
}

console.log(operation(grid, x));
