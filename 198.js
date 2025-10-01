let nums = [1, 2, 3, 1];

function rob(nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  let x = nums[0];
  let y = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    var finalAns = Math.max(x + nums[i], y);
    x = y;
    y = finalAns;
  }

  return y;
}

console.log(rob(nums));
