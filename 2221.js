let nums = [1, 2, 3, 4, 5];

function triangularSum(nums) {
  let i = 0;
  while (nums.length > 1) {
    nums[i] = (nums[i] + nums[i + 1]) % 10;

    i++;
    if (i === nums.length - 1) {
      nums.pop();
      i = 0;
    }
  }

  return nums[0];
}

console.log(triangularSum(nums));
