let intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];

function eraseOverlapIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let ans = 0;
  let k = -Infinity;

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < k) {
      ans++;
    } else {
      k = intervals[i][1];
    }
  }

  return ans;
}

console.log(eraseOverlapIntervals(intervals));
