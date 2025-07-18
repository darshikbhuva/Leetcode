let nums = [3, 3];
let target = 6;

function twoSum(nums, target) {
  let map = {};

  for (i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i];

    if (map[numberNeeded] !== undefined) {
      return [i, map[numberNeeded]];
    }

    map[nums[i]] = i;
  }
}

console.log(twoSum(nums, target));
