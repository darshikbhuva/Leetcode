nums = [-10, 8, 6, 7, -2, -3];

function negativeMax(nums) {
  let seen = new Set(nums);
  let result = [];

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) continue;

    if (seen.has(Math.abs(nums[i]))) {
      result.push(Math.abs(nums[i]));
    }
  }

  if (result.length > 0) {
    return Math.max(...result);
  } else {
    return -1;
  }
}

console.log(negativeMax(nums));
