let matrix = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
];

function luckyNumbers(matrix) {
  let ans = [];
  let res = [];
  let res2 = [];
  let map = new Map();
  for (let i = 0; i < matrix.length; i++) {
    res.push(Math.min(...matrix[i]));
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (!map.has(i)) map.set(i, []);
    for (let j = 0; j < matrix.length; j++) {
      map.get(i).push(matrix[j][i]);
    }
  }

  for (let [val, ele] of map) {
    res2.push(Math.max(...ele));
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res2.length; j++) {
      if (res[i] === res2[j]) {
        ans.push(res[i]);
      }
    }
  }
  return ans;
}

console.log(luckyNumbers(matrix));
