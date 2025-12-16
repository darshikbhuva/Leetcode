nums = [1, 4, 2, 5];

function maximizeExpressionOfThree1(nums) {
  nums = nums.sort((a, b) => a - b);

  return nums[nums.length - 1] + nums[nums.length - 2] - nums[0];
}

function maximizeExpressionOfThree2(nums) {
  let min = Infinity;
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (min >= nums[i]) {
      min = nums[i];
    }

    if (firstMax <= nums[i]) {
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (secondMax < nums[i] && nums[i] !== firstMax) {
      secondMax = nums[i];
    }
  }

  return firstMax + secondMax - min;
}

console.log(maximizeExpressionOfThree2(nums));
