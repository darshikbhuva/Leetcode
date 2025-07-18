let arr = [1, 100, 99, 98, 97];
function binarySearch(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

console.log(binarySearch(arr));
