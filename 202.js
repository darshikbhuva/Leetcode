let n = 13;

function happyNumber(n) {
  var set = new Set();

  function recursion(n) {
    let sum = 0;
    while (n > 0) {
      let last = n % 10;
      sum += last * last;

      n = Math.floor(n / 10);
    }

    if (sum === 1) {
      return true;
    } else {
      if (set.has(sum)) {
        return false;
      } else {
        set.add(sum);
        return recursion(sum);
      }
    }
  }

  return recursion(n);
}

console.log(happyNumber(n));
