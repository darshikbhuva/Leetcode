let n = 10;

function square(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let c = Math.sqrt(i * i + j * j);
      if (Number.isInteger(c) && c <= n) count++;
    }
  }
  return count;
}

console.log(square(n));
