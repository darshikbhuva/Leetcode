let nums = [10, 4, 8, 3];

function leftRightDiff(nums) {
  let leftSum = 0;
  let leftArr = [];
  let rightSum = 0;
  let rightArr = [];
  let result = [];
  for (i = 0; i < nums.length; i++) {
    leftArr.push(leftSum);
    leftSum += nums[i];
  }
  for (i = nums.length - 1; i >= 0; i--) {
    rightArr.unshift(rightSum);
    rightSum += nums[i];
  }

  for (i = 0; i < nums.length; i++) {
    result.push(Math.abs(leftArr[i] - rightArr[i]));
  }

  return result;
}

console.log(leftRightDiff(nums));
