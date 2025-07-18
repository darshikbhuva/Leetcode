let n = 7;

function sum(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sum(n));
