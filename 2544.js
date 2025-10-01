let n = 521;

function alternateDigitSum(n) {
  n = String(n).split("");
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    if (i % 2 === 0) {
      var digit = Number(n[i]);
    } else {
      digit = -Number(n[i]);
    }
    sum += digit;
  }

  return sum;
}

console.log(alternateDigitSum(n));
