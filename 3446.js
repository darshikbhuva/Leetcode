let grid = [
  [1, 7, 3],
  [9, 8, 2],
  [4, 5, 6],
];

function sortMatrix(grid) {
  let mat = new Map();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let key = i - j;
      if (!mat.has(key)) mat.set(key, []);

      mat.get(key).push(grid[i][j]);
    }
  }

  for (let [ele, val] of mat) {
    if (ele >= 0) {
      val = val.sort((a, b) => b - a);
    } else {
      val = val.sort((a, b) => a - b);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      grid[i][j] = mat.get(i - j).shift();
    }
  }

  return grid;
}

console.log(sortMatrix(grid));
