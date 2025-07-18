let nums = [1, 1, 2];

function sorting(nums) {
  let index = 1;
  for (i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}

console.log(sorting(nums));
