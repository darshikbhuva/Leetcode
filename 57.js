let intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
let newInterval = [4, 8];

function insert(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  let res = [];

  //left non overlapping intervals
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  //overlapping intervals

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  res.push(newInterval);

  //right non overlapping
  while (i < intervals.length) {
    res.push(intervals[i]);
    i++;
  }

  return res;
}

console.log(insert(intervals, newInterval));
