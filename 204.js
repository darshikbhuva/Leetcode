let n = 10;

function countPrime(n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  return count;
}

var countPrimes = function (n) {
  let seen = Array(n),
    res = 0;

  for (let num = 2; num < n; num++) {
    if (seen[num]) continue;
    res++;

    for (let mult = num * num; mult < n; mult += num) seen[mult] = 1;
  }

  return res;
};

console.log(countPrime(n));
