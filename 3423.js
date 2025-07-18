let nums = [1, 2, 4];

function diff(nums) {
  let maxDiff = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums[i] - nums[(i + 1) % n]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

console.log(diff(nums));
