let nums = [2, 3, -1, 8, 4];

function findMiddleIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let k = i - 1; k >= 0; k--) {
      leftSum += nums[k];
    }

    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

console.log(findMiddleIndex(nums));
