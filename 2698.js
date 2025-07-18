let n = 10;

function punishmentNumber(n) {
  let res = 0;

  for (i = 1; i <= n; i++) {
    if (isPunish(i)) {
      res += i * i;
    }
  }

  function isPunish(num) {
    let number = num * num;
    let temp = number;
    let sum = 0;

    while (temp > 0) {
      let digit = temp % 10;
      sum += digit;
      temp = Math.floor(temp / 10);
    }

    if (sum === num) {
      return number;
    }
  }

  return res;
}

console.log(punishmentNumber(n));
