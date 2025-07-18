let n = 14;

function matches(n) {
  let sum = 0;

  function rec(n) {
    if (n === 1) {
      return sum;
    }
    if (n % 2 === 0) {
      sum += n / 2;
      n = n / 2;
      return rec(n);
    } else {
      sum += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
      return rec(n);
    }
  }

  let res = rec(n);

  return res;
}

console.log(matches(n));
