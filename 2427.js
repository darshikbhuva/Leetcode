let a = 25;
let b = 30;

function factor(a, b) {
  let min = Math.min(a, b);
  let count = 0;

  for (i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }

  return count;
}

console.log(factor(a, b));
