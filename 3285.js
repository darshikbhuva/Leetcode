let height = [1, 2, 3, 4, 5];
let threshold = 2;

function mountain(height, threshold) {
  let res = [];

  for (i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      res.push(i);
    }
  }

  return res;
}

console.log(mountain(height, threshold));
