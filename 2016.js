let nums = [7, 1, 5, 4];

function maxDiff(nums) {
  let mini = nums[0];
  let ans = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > mini) ans = Math.max(ans, nums[i] - mini);
    mini = Math.min(mini, nums[i]);
  }
  return ans === -Infinity ? -1 : ans;
}

console.log(maxDiff(nums));
