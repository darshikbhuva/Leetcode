let points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];

function minTimeToVisitAllPoints(points) {
  let res = 0;

  for (let i = 1; i < points.length; i++) {
    res += Math.max(
      Math.abs(points[i][0] - points[i - 1][0]),
      Math.abs(points[i][1] - points[i - 1][1])
    );
  }

  return res;
}

console.log(minTimeToVisitAllPoints(points));
