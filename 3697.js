let n = 537;

function decimalRepresentation(n) {
  const res = [];
  let pow10 = 1;

  while (n > 0) {
    const mod = n % 10;
    if (mod > 0) res.push(mod * pow10);
    n = (n - mod) / 10;
    pow10 *= 10;
  }

  return res.reverse();
}

console.log(decimalRepresentation(n));
