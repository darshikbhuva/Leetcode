let nums = [4, 3, 1, 6];

function special(nums) {
  let n = nums.length;

  if (n === 1) {
    return true;
  }

  for (i = 0; i < n - 1; ) {
    if (
      (nums[i] % 2 === 0 && nums[i + 1] % 2 !== 0) ||
      (nums[i] % 2 !== 0 && nums[i + 1] % 2 === 0)
    ) {
      i++;
    } else {
      return false;
    }
  }

  return true;
}

console.log(special(nums));
