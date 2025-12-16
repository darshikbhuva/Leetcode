let nums = [1, 1, 1];

function isGood(nums) {
  nums = nums.sort((a, b) => a - b);

  let max = nums[nums.length - 1];

  for (let i = 1; i <= max; i++) {
    console.log(i, nums[i - 1]);

    if (i !== nums[i - 1]) {
      return false;
    }
  }

  console.log(nums);
  console.log(max);
  console.log(nums[max]);
  console.log(nums[max + 1]);

  if (nums[max] === max && nums[max - 1] === max) {
    return true;
  }

  return false;
}

console.log(isGood(nums));
