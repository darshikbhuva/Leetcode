let code = [5, 7, 1, 4];
let k = 3;

function decrypt(code, k) {
  let n = code.length;
  let result = new Array(n).fill(0);

  switch (true) {
    case k > 0:
      for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
          result[i] += code[(i + j) % n];
        }
      }
      break;

    case k < 0:
      for (let i = 0; i < n; i++) {
        for (let j = 1; j <= Math.abs(k); j++) {
          result[i] += code[(i - j + n) % n];
        }
      }
      break;
  }
  return result;
}

console.log(decrypt(code, k));
