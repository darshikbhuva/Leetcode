let x = 23;

function harshNumber(x) {
  let temp = x;
  let sum = 0;

  while (x > 0) {
    let digit = x % 10;
    sum += digit;
    x = Math.floor(x / 10);
  }

  if (temp % sum === 0) {
    return sum;
  } else {
    return -1;
  }
}

console.log(harshNumber(x));
