let nums = [1, 2, 3, 4, 5, 4];

function checkPrimeFrequency(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let freq of map.values()) {
    if (isPrime(freq)) {
      return true;
    }
  }

  return false;
}

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(checkPrimeFrequency(nums));
