let nums = [5, 2, 3, 1];

function minimumPairRemoval(nums) {
  let count = 0;
}

function isNonDecreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] <= arr[i + 1])) {
      return false;
    }
  }
  return true;
}
console.log(minimumPairRemoval(nums));
