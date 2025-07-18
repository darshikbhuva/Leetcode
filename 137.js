let nums = [2, 2, 3, 2];

function singleNumber(nums) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]) === 3) {
      map.delete(nums[i]);
    } else {
      if ((map.get(nums[i]) || 0) + 1 === 3) {
        map.delete(nums[i]);
      } else {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
      }
    }
  }

  return Array.from(map.keys())[0];
}

console.log(singleNumber(nums));
