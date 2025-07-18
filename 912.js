let arr = [5, 2, 3, 1];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return mergeArr(left, right);
}

function mergeArr(left, right) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort(arr));
