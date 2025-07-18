function closestPrimes(left, right) {
  let isPrime = new Array(right + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= right; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= right; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let primes = [];
  for (let i = left; i <= right; i++) {
    if (isPrime[i]) primes.push(i);
  }

  if (primes.length < 2) return [-1, -1];

  let minDiff = Infinity;
  let ans = [-1, -1];

  for (let i = 0; i < primes.length - 1; i++) {
    let diff = primes[i + 1] - primes[i];
    if (diff < minDiff) {
      minDiff = diff;
      ans = [primes[i], primes[i + 1]];
    }
  }

  return ans;
}

// Example usage
console.log(closestPrimes(10, 19)); // Output: [11, 13]
console.log(closestPrimes(4, 6)); // Output: [-1, -1]
