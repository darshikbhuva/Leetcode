let nums = [1, 3, 5, 7];

function alternatingSum(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      sum += nums[i];
    } else {
      sum -= nums[i];
    }
  }

  return sum;
}

console.log(alternatingSum(nums));
