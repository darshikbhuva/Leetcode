let nums6 = [10, -20, 30, -40, 50, -60, 70];

function maxAbsSum(nums) {
  if (nums.length === 0) return 0;

  let maxSum = nums[0];
  let minSum = nums[0];
  let result = Math.abs(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(nums[i], maxSum + nums[i]);
    minSum = Math.min(nums[i], minSum + nums[i]);
    result = Math.max(result, Math.abs(maxSum), Math.abs(minSum));
  }

  return result;
}

console.log(maxAbsSum(nums6), "70");
