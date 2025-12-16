let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  let currSum = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    result = Math.max(currSum, result);
  }

  return result;
}

console.log(maxSubArray(nums));
