let grid = [
  [1, 2, 4],
  [3, 3, 1],
];

function deleteGreatestValue(grid) {
  let ans = 0;
  grid.map((data) => data.sort((a, b) => a - b));

  while (grid[0].length) {
    let temp = [];
    for (let i = 0; i < grid.length; i++) {
      temp.push(grid[i].pop());
    }
    ans += Math.max(...temp);
  }
  return ans;
}

console.log(deleteGreatestValue(grid));
