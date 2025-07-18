arr = [1, 2, 4];
function arithmeticProgress(arr) {
  arr = arr.sort((a, b) => a - b);
  let diff = Math.abs(arr[0] - arr[1]);

  for (i = 0; i < arr.length - 1; i++) {
    if (diff !== Math.abs(arr[i] - arr[i + 1])) {
      return false;
    }
  }

  return true;
}

console.log(arithmeticProgress(arr));
