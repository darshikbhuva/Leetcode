let nums = [3, 1, 1, 2];

function subArray(nums) {
  let sum = 0;

  for (i = 0; i < nums.length; i++) {
    let start = Math.max(0, i - nums[i]);

    for (j = start; j <= i; j++) {
      sum += nums[j];
    }
  }

  return sum;
}

console.log(subArray(nums));
