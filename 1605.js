let rowSum = [3, 8];
let colSum = [4, 7];

function restoreMatrix(rowSum, colSum) {
  let m = rowSum.length;
  let n = colSum.length;
  let result = Array.from({ length: m }, () => Array(n).fill(0));

  let i = 0,
    j = 0;

  while (i < m && j < n) {
    let val = Math.min(rowSum[i], colSum[j]);
    result[i][j] = val;
    rowSum[i] -= val;
    colSum[j] -= val;

    if (rowSum[i] === 0) i++;
    if (colSum[j] === 0) j++;
  }

  return result;
}

console.log(restoreMatrix(rowSum, colSum));
