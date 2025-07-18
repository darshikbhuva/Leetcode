let colors = [1, 1, 1, 6, 1, 1, 1];

function diffColor(colors) {
  let n = colors.length;

  let max = 0;
  for (let i = 0; i < n; i++) {
    if (colors[i] !== colors[0]) {
      max = Math.max(max, i);
    }
    if (colors[i] !== colors[n - 1]) {
      max = Math.max(max, n - 1 - i);
    }
  }
  return max;
}

console.log(diffColor(colors));
