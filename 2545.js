let score = [
  [10, 6, 9, 1],
  [7, 5, 11, 2],
  [4, 8, 3, 15],
];
let k = 2;

function sortTheStudents(score) {
  let map = new Map();

  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score[i].length; j++) {
      if (j === k) {
        map.set(score[i][j], i);
      }
    }
  }

  let arr = [...map.entries()];
  arr = arr.sort((a, b) => b[0] - a[0]);
  let result = [];

  for (let [val, key] of arr) {
    result.push(score[key]);
  }

  return result;
}

function sortTheStudentsV2(score) {
  return score.sort((a, b) => b[k] - a[k]);
}

console.log(sortTheStudents(score));
