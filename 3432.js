let nums = [2, 4, 6, 8];

function partition(nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  let count = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;

    if ((leftSum - rightSum) % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(partition(nums));
