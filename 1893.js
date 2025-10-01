(ranges = [
  [1, 10],
  [10, 20],
]),
  (left = 21),
  (right = 21);

function isCovered(ranges, left, right) {
  ranges = ranges.sort((a, b) => a[0] - b[0]);

  while (left <= right) {
    let flag = false;
    for (let i = 0; i < ranges.length; i++) {
      if (ranges[i][0] <= left && ranges[i][1] >= left) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return false;
    }
    left++;
  }

  return true;
}

console.log(isCovered(ranges, left, right));
