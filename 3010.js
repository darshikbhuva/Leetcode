let nums = [1, 2, 3, 12];

function minimumCost(nums) {
  const first = nums.shift();
  nums = nums.sort((a, b) => a - b);
  return first + nums[0] + nums[1];
}

console.log(minimumCost(nums));
