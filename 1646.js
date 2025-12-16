let n = 3;

var getMaximumGenerated = function (n) {
  if (n <= 1) return n;

  let result = new Array(n + 1);
  result[0] = 0;
  result[1] = 1;

  for (let i = 1; i * 2 <= n; i++) {
    result[2 * i] = result[i];

    if (2 * i + 1 <= n) {
      result[2 * i + 1] = result[i] + result[i + 1];
    }
  }

  return Math.max(...result);
};

console.log(getMaximumGenerated(n));
