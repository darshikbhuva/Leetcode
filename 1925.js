let n = 10;

function square(n) {
  let count = 0;

  for (let i = 1; i <= n - 2; i++) {
    if (i * i + (i + 1) * (i + 1) === (i + 2) * (i + 2)) {
      count++;
    }
  }

  return count * 2;
}

console.log(square(n));
