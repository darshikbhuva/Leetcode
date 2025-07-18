let n = 14;

function power(n) {
  if (n === 1) {
    return true;
  }

  if (n <= 0) {
    return false;
  }

  while (n > 1) {
    n = n / 4;
    if (!Number.isInteger(n)) {
      return false;
    }
  }

  return true;
}

console.log(power(n));
