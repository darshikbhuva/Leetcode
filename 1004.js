let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;

function longestOnes(nums, k) {
  let maxLength = 0;
  let countZero = 0;

  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) {
      countZero++;
    }

    while (countZero > k) {
      if (nums[i] === 0) countZero--;
      i++;
    }
    maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength;
}

console.log(longestOnes(nums, k));
