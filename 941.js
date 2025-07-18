let arr = [2, 0, 2];

function mountainArray(arr) {
  let n = arr.length - 1;
  let count = 0;

  if (n < 2) {
    return false;
  }

  for (i = 1; i < n; i++) {
    if (
      (arr[i] >= arr[i + 1] && arr[i] >= arr[i - 1]) ||
      (arr[i] <= arr[i + 1] && arr[i] <= arr[i - 1])
    ) {
      count++;
    }
  }

  if (
    count > 1 ||
    (count === 1 &&
      (arr[1] === arr[2] || arr[1] === arr[0] || arr[0] === arr[2])) ||
    count === 0
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(mountainArray(arr));
