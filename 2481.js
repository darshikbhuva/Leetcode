n = 1;

function numberOfCuts(n) {
  if (n === 1) {
    return 0;
  }

  if (n % 2 === 0) {
    return Math.floor(n / 2);
  } else {
    return n;
  }
}

console.log(numberOfCuts(n));
