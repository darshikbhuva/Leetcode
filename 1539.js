let arr = [2, 3, 4, 7, 11];
let k = 5;

function findKthPositive(arr, k) {
  let res = [];
  let start = 1;
  let set = new Set(arr);
  let end = arr[arr.length - 1] + k;

  while (start <= end) {
    if (!set.has(start)) {
      res.push(start);
    }
    start++;
  }

  return res[k - 1];
}

console.log(findKthPositive(arr, k));
