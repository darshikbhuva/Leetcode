let n = 5;

function getNoZeroIntegers(n) {
  if (n > 3) {
    for (let i = 3; i < n; i++) {
      if (hasZero(n - i) || hasZero(i)) {
        continue;
      } else {
        return [i, n - i];
      }
    }
  } else if (n === 3) {
    return [1, 2];
  } else {
    return [1, 1];
  }
}

function hasZero(num) {
  num = String(num);

  num = num.split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0") {
      return true;
    }
  }
  return false;
}

console.log(getNoZeroIntegers(n));
