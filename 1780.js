let n = 12;

function sumOfPower(n) {
  while (n > 0) {
    if (n % 3 === 2) {
      return false;
    }
    n = Math.floor(n / 3);
  }
  return true;
}

console.log(sumOfPower(n));
