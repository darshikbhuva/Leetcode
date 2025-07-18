let n = 34;
let k = 6;

function log(n, k) {
  let res = 0;

  while (n > 0) {
    res += n % k;
    n = Math.floor(n / k);
  }

  return res;
}

console.log(log(n, k));
