let points = [
  [1, 3],
  [3, 3],
  [5, 3],
  [2, 2],
];
let queries = [
  [2, 3, 1],
  [4, 3, 1],
  [1, 1, 2],
];

function countPoints(points, queries) {
  let arr = [];
  for (let i = 0; i < queries.length; i++) {
    let c = 0;
    for (let j = 0; j < points.length; j++) {
      let x = queries[i][0] - points[j][0];
      let y = queries[i][1] - points[j][1];
      let r = queries[i][2];
      if (x * x + y * y <= r * r) {
        c++;
      }
    }
    arr.push(c);
  }
  return arr;
}

console.log(countPoints(points, queries));
