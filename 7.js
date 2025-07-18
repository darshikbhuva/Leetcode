let x = -1463847412;

function reverse(x) {
  let revNum = 0;

  n = Math.abs(x);

  while (n > 0) {
    revNum = revNum * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) {
    return 0;
  }

  if (x < 0) {
    revNum = -1 * revNum;
  }

  return revNum;
}

console.log(reverse(x));
