let nums = [
  311155, 311155, 311155, 311155, 311155, 311155, 311155, 311155, 201191,
  311155,
];

function longestSubarray(nums) {
  let maxEle = -Infinity;
  let streak = 0;
  let result = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] > maxEle) {
      streak = 0;
      result = 0;
      maxEle = nums[i];
    }

    if (nums[i] === maxEle) {
      streak++;
    } else {
      streak = 0;
    }
    result = Math.max(streak, result);
    i++;
  }

  return result;
}

console.log(longestSubarray(nums));
