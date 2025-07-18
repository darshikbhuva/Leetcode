nums = [12, 345, 2, 6, 7896];

function even(nums) {
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    if (
      (nums[i] >= 1 && nums[i] <= 9) ||
      (nums[i] >= 100 && nums[i] <= 999) ||
      (nums[i] >= 10000 && nums[i] <= 99999)
    ) {
      continue;
    } else {
      count++;
    }
  }

  return count;
}

console.log(even(nums));
