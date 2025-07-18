let nums = [0, 1, 1, 1, 0, 0];

function equalToOne(nums) {
  let n = nums.length;
  let count = 0;

  for (s = 0; s < n - 2; s++) {
    if (nums[s] === 0) {
      nums[s] = 1 - nums[s];
      nums[s + 1] = 1 - nums[s + 1];
      nums[s + 2] = 1 - nums[s + 2];
      count++;
    }
  }

  if (nums[n - 2] === 0 || nums[n - 1] === 0) {
    return -1;
  }

  return count;
}

console.log(equalToOne(nums));
