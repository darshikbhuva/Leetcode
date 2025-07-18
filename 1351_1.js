let grid = [
  [3, 2],
  [1, 0],
];

function countNegativeNumber(grid) {
  let num = grid.flat();
  let count = 0;

  for (i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      count++;
    }
  }

  return count;
}

console.log(countNegativeNumber(grid));

// time complexity O(n**2)
