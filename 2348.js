let nums = [1, 3, 0, 0, 2, 0, 0, 4];

function zeroFilledSubarray(nums) {
  let result = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      count = 0;
    }

    result += count;
  }

  return result;
}

console.log(zeroFilledSubarray(nums));
