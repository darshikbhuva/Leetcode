(nums = [1, 1, 2, 4, 9]), (k = 1);

function thresholdVal(nums, k) {
  let operations = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      operations++;
    }
  }

  return operations;
}

console.log(thresholdVal(nums, k));
