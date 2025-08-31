let nums = [1, 1, 0, 1];

function longestSubarray(nums) {
  let countZero = 0;
  let maxLength = 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) {
      countZero++;
    }

    while (countZero > 1) {
      if (nums[i] === 0) countZero--;
      i++;
    }

    maxLength = Math.max(maxLength, j - i);
  }

  return maxLength;
}

console.log(longestSubarray(nums));
