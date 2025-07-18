var diagonalPrime = function (nums) {
  let result = [];

  function isPrime(a) {
    if (a < 2) return false;
    for (let i = 2; i * i <= a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i][i])) {
      result.push(nums[i][i]);
    }

    if (i !== nums.length - i - 1 && isPrime(nums[i][nums.length - i - 1])) {
      result.push(nums[i][nums.length - i - 1]);
    }
  }

  return result.length > 0 ? Math.max(...result) : 0;
};
