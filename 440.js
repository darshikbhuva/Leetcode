let n = 13;
let k = 2;

function order(n, k) {
  let arr = [];

  for (i = 1; i <= n; i++) {
    arr.push(i);
  }

  arr = arr.sort();

  console.log(arr);

  return arr[k - 1];
}

console.log(order(n, k));
