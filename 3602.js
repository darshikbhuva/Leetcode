let n = 13;

function concatHex36(n) {
  let num1 = (n * n).toString(16);
  let num2 = (n * n * n).toString(36);

  return (num1 + num2).toUpperCase();
}

console.log(concatHex36(n));
