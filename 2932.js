let nums = [1, 2, 3, 4, 5];

function strongXOR(nums) {
  let max = -Infinity;

  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        max = Math.max(max, nums[i] ^ nums[j]);
      }
    }
  }

  return max;
}

console.log(strongXOR(nums));
