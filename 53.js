let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  let cur_max = nums[0];
  let max_so_far = nums[0];

  for (i = 1; i < nums.length; i++) {
    cur_max = Math.max(nums[i], nums[i] + cur_max);
    max_so_far = Math.max(max_so_far, cur_max);
  }

  return max_so_far;
}

console.log(maxSubArray(nums));
