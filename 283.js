let num = [0, 0, 1];

function moveZeroes(nums) {
  let nonZeroIndex = 0;

  // Move all non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the rest of the array with zeroes
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes(num));
