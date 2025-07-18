let n = 31;

function product(n) {
  let temp = [];

  while (n > 0) {
    let digit = n % 10;

    temp.push(digit);

    n = Math.floor(n / 10);
  }

  temp = temp.sort((a, b) => a - b);
  return temp[temp.length - 1] * temp[temp.length - 2];
}

console.log(product(n));
