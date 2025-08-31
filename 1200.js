let arr = [40, 11, 26, 27, -20];

function minimumAbsDifference(arr) {
  arr = arr.sort((a, b) => a - b);

  let result = [];
  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    if (minDiff > arr[i + 1] - arr[i]) {
      minDiff = arr[i + 1] - arr[i];
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) === minDiff) {
      result.push([arr[i], arr[i + 1]]);
    }
  }

  return result;
}

console.log(minimumAbsDifference(arr));
