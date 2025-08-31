let dimensions = [
  [2, 6],
  [5, 1],
  [3, 10],
  [8, 4],
];

function areaOfMaxDiagonal() {
  let maxDiag = -Infinity;
  let area = -Infinity;
  for (let i = 0; i < dimensions.length; i++) {
    let length = dimensions[i][0];
    let width = dimensions[i][1];

    let currMaxDig = Math.sqrt(length * length + width * width);
    let currArea = length * width;

    if (currMaxDig > maxDiag || (currMaxDig === maxDiag && currArea > area)) {
      maxDiag = currMaxDig;
      area = currArea;
    }
  }

  return area;
}

console.log(areaOfMaxDiagonal(dimensions));
