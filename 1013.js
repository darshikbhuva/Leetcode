let arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];

function canThreePartsEqualSum(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  if (sum % 3 != 0) return false;
  let target = sum / 3;

  let start = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    start += arr[i];
    if (start === target) {
      count++;
      start = 0;
    }

    if (count === 3) return true;
  }

  return false;
}

console.log(canThreePartsEqualSum(arr));
