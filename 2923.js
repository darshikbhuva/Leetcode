let grid = [
  [0, 0, 0],
  [1, 0, 1],
  [1, 0, 0],
];
function findChampion(grid) {
  const n = grid.length;

  for (let team = 0; team < n; team++) {
    let isChampion = true;

    for (let other = 0; other < n; other++) {
      if (other !== team && grid[other][team] === 1) {
        isChampion = false;
        break;
      }
    }

    if (isChampion) return team;
  }

  return -1;
}

console.log(findChampion(grid));
