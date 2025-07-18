let n = 13;

function order(n) {
  let arr = [];

  for (i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr.sort();
}

console.log(order(n));
