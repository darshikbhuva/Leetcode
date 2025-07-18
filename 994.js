let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

function orangesRotting(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let queue = [];

  // first add all the rotten oranges in queue

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  // mark adj nodes as rotten and push in queue till it's not empty
  let maxMinutes = 0;

  while (queue.length) {
    let [x, y, minute] = queue.shift();

    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, minute + 1]);
    }
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, minute + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, minute + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, minute + 1]);
    }
    maxMinutes = Math.max(minute, maxMinutes);
  }

  // finally run over each element in check if any fresh in remaining

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxMinutes;
}

console.log(orangesRotting(grid));
