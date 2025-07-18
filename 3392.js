let nums = [0, 0, 0];

function subArray(nums) {
  let count = 0;

  for (i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 2] === nums[i + 1] / 2) {
      count++;
    }
  }

  return count;
}

console.log(subArray(nums));
