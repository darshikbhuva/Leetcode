let tiles = "AAABBC";

function numTilePossibilities(tiles) {
  tiles = tiles.split("").sort().join("");
  let result = new Set();
  let used = new Array(tiles.length).fill(false);

  const backtracking = (path) => {
    if (path.length > 0) {
      result.add(path);
    }

    for (let i = 0; i < tiles.length; i++) {
      if (used[i]) continue;
      if (i > 0 && tiles[i] === tiles[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      path += tiles[i];
      backtracking(path);
      path = path.slice(0, -1);
      used[i] = false;
    }
  };

  backtracking("");
  return result.size;
}

console.log(numTilePossibilities(tiles));
