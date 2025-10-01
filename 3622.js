let n = 10;

function checkDivisibility(n) {
  if (n >= 0 && n <= 9) {
    return false;
  }
  let sum = 0;
  let product = 1;
  let temp = n;

  while (n > 0) {
    let lastDigit = n % 10;
    sum += lastDigit;
    product *= lastDigit;
    n = Math.floor(n / 10);
  }

  return temp % (sum + product) === 0;
}

console.log(checkDivisibility(n));
