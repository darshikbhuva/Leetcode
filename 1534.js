let arr = [1, 1, 2, 2, 3];
let a = 0;
let b = 0;
let c = 1;

function goodTriplate(arr, a, b, c) {
  let count = 0;
  let n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;
      ly;

      for (let k = j + 1; k < n; k++) {
        if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(goodTriplate(arr, a, b, c));
