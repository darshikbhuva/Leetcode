(nums = [23, 2, 6, 4, 7]), (k = 13);

function subArray(nums, k) {
  for (i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum % k === 0) {
        return true;
      }
    }
  }

  return false;
}

console.log(subArray(nums, k));
