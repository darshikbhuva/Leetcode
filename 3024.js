let nums = [3, 3, 3];

function typeOfTriangle(nums) {
  nums = nums.sort((a, b) => a - b);

  let [x, y, z] = nums;

  if (x + y <= z) {
    return "none";
  }

  if (x === y && x === z && y === z) {
    return "equilateral";
  } else if (x === y || y === z || z === x) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

console.log(typeOfTriangle(nums));
