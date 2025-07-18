let nums = [3, 0, 0, 0, 1];

function operation(nums) {
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 3 !== 0) {
      let rem = nums[i] % 3;
      nums[i] = nums[i] + (3 - rem);
      count++;
    }
  }

  return count;
}

console.log(operation(nums));
