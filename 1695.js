let nums = [10000, 1, 10000, 1, 1, 1, 1, 1, 1];

function maximumUniqueSubarray(nums) {
  let set = new Set();
  let maxSum = 0;
  let currSum = 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    while (set.has(nums[j])) {
      set.delete(nums[i]);
      currSum -= nums[i];
      i++;
    }
    set.add(nums[j]);
    currSum += nums[j];
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

console.log(maximumUniqueSubarray(nums));
