let nums = [13, 25, 83, 77];

function separate(nums) {
  result = [];

  for (i = nums.length - 1; i >= 0; i--) {
    while (nums[i] > 0) {
      let num = nums[i] % 10;
      result.unshift(num);
      nums[i] = Math.floor(nums[i] / 10);
    }
  }

  return result;
}

console.log(separate(nums));
