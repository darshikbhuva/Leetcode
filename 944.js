let strs = ["zyx", "wvu", "tsr"];

function sorted(strs) {
  let count = 0;
  const numRows = strs.length;
  const numCols = strs[0].length;

  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows - 1; row++) {
      if (strs[row][col] > strs[row + 1][col]) {
        count++;
        break;
      }
    }
  }

  return count;
}

console.log(sorted(strs));
