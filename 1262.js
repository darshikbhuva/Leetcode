let nums = [3, 6, 5, 1, 8];

function maxSumDivThree(nums) {
  nums = nums.sort((a, b) => a - b);

  console.log(nums);
}

console.log(maxSumDivThree(nums));
