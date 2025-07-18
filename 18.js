let nums = [1, 0, -1, 0, -2, 2];
let target = 0;

function sum(nums, target) {
  let mainResult = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1,
        right = nums.length - 1;
      let newTarget = target - nums[i] - nums[j];

      while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === newTarget) {
          mainResult.push([nums[i], nums[j], nums[left], nums[right]]);

          // Skip duplicates
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < newTarget) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return mainResult;
}

console.log(sum(nums, target));
