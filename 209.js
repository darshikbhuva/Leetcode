(target = 7), (nums = [2, 3, 1, 2, 4, 3]);

function minSubArrayLen(target, nums) {
  let minLength = Infinity;
  let i = 0;
  let tempSum = 0;

  for (let j = 0; j < nums.length; j++) {
    tempSum += nums[j];
    while (tempSum >= target) {
      minLength = Math.min(minLength, j - i + 1);
      tempSum -= nums[i];
      i++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(target, nums));
