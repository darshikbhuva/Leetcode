let nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2];

function findDupllicate(nums) {
  let map = new Map();
  let result = [];

  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    if (map.get(nums[i]) > 1) {
      result.push(nums[i]);
    }
  }

  return result;
}

console.log(findDupllicate(nums));
