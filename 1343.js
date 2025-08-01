function numOfSubArrays(arr, k, threshold) {
  let count = 0;
  let i = 0;

  while (i <= arr.length - k) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }

    let avg = Math.floor(sum / k);
    if (avg >= threshold) {
      count++;
    }

    i++;
  }

  return count;
}

const arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3];
const k = 3;
const threshold = 5;

console.log(numOfSubArrays(arr, k, threshold));
