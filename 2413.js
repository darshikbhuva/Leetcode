let n = 100;

function small(n) {
  if (n % 2 === 0) {
    return n;
  } else {
    return n * 2;
  }
}

console.log(small(n));
