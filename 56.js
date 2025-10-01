let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

function merge(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let i = 0;
  let n = intervals.length;

  while (i < n) {
    let curr = intervals[i];

    // Merge while overlapping
    while (i < n - 1 && curr[1] >= intervals[i + 1][0]) {
      curr[0] = Math.min(curr[0], intervals[i + 1][0]);
      curr[1] = Math.max(curr[1], intervals[i + 1][1]);
      i++;
    }

    res.push(curr);
    i++;
  }

  return res;
}

console.log(merge(intervals));
