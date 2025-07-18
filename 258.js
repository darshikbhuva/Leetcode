let num = 0;

function addDigits(num) {
  if (num === 0) {
    return 0;
  }

  function sumOfDigit(n) {
    let sum = 0;
    while (n > 0) {
      let last = n % 10;
      sum += last;
      n = Math.floor(n / 10);
    }

    if (sum >= 10) {
      return sumOfDigit(sum);
    } else {
      return sum;
    }
  }

  let x = sumOfDigit(num);

  return x;
}

console.log(addDigits(num));
