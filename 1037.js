let points = [
  [0, 0],
  [1, 1],
  [1, 1],
];

function isBoomerang(points) {
  // check if all 3 points are distinct
  if (
    (points[0][0] === points[1][0] && points[0][1] === points[1][1]) ||
    (points[1][0] === points[2][0] && points[1][1] === points[2][1]) ||
    (points[0][0] === points[2][0] && points[0][1] === points[2][1])
  ) {
    return false;
  }

  // area method: (x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2))
  let [x1, y1] = points[0];
  let [x2, y2] = points[1];
  let [x3, y3] = points[2];

  let area = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);

  return area !== 0;
}

console.log(isBoomerang(points));
