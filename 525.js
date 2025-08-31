let nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];

function findMaxLength(nums) {
  let one = 0;
  let zero = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++;
    }

    if (nums[i] === 1) {
      one++;
    }

    if (one === zero) {
      maxLength = Math.max(one + zero, maxLength);
    }
  }

  return maxLength;
}

console.log(findMaxLength(nums));
