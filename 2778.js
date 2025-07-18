let nums = [2, 7, 1, 19, 18, 3];

function sumOfSqure(nums) {
  let n = nums.length;
  let sum = 0;

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += Math.pow(nums[i - 1], 2);
    }
  }

  return sum;
}

console.log(sumOfSqure(nums));
