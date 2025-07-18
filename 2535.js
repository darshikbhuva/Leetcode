let nums = [1, 15, 6, 3];

function elementDigitSum(nums) {
  let sum1 = 0;
  let sum2 = 0;

  for (i = 0; i < nums.length; i++) {
    sum1 += nums[i];
    while (nums[i] > 0) {
      sum2 += nums[i] % 10;
      nums[i] = Math.floor(nums[i] / 10);
    }
  }

  return Math.abs(sum1 - sum2);
}

console.log(elementDigitSum(nums));
