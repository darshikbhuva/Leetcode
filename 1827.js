let nums = [1, 1, 1];

function strickInc(nums) {
  let count = 0;
  let sum = 0;
  let sum2 = 0;

  if (nums.length === 1) {
    return count;
  }

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (i = 0; i < nums.length; i++) {
    if (!(nums[i] < nums[i + 1]) && i !== nums.length - 1) {
      nums[i + 1] = nums[i] + 1;
    }

    sum2 += nums[i];
  }

  count = sum2 - sum;

  return count;
}

console.log(strickInc(nums));
