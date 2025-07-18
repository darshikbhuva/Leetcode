let n = 3;

function calcu(n) {
  let x;

  if (n >= 2) {
    x = Math.pow(n, 2) + Math.pow(n - 1, 2);
  } else if (n == 1) {
    x = 1;
  }

  return x;
}

console.log(calcu(n));
