let n = -2;

function power(n) {
  if (n === 1) {
    return true;
  }

  if (n <= 0) {
    return false;
  }

  while (n > 1) {
    n = n / 2;
    if (!Number.isInteger(n)) {
      return false;
    }
  }

  return true;
}

function power2(n) {
  if (n === 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;

  return power2(n / 2);
}

console.log(power2(n));
