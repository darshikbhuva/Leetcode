let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function mostWater(height) {
  let n = height.length;
  let i = 0;
  let j = n - 1;
  let maxWater = 0;

  while (i < j) {
    let w = j - i;
    let h = Math.min(height[i], height[j]);

    area = h * w;

    maxWater = Math.max(maxWater, area);

    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return maxWater;
}

console.log(mostWater(height));
