let n = 3 ** 19 + 1;

function powerOfThree(n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n = n / 3;
  }
  return n === 1;
}

console.log(powerOfThree(n));
