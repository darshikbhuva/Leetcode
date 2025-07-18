let nums = [3, 3];
let target = 6;

function twoSum(nums, target) {
  let map = {};

  for (i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i];

    if (map[numberNeeded] !== undefined && map[numberNeeded] !== i) {
      return [i, map[numberNeeded]];
    }
  }
}

console.log(twoSum(nums, target));
