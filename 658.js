let arr = [1, 2, 3, 4, 5];
let k = 4;
let x = 3;

function findClosestElements(arr, k, x) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid + k] - x < x - arr[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return arr.slice(l, l + k);
}

console.log(findClosestElements(arr, k, x));
