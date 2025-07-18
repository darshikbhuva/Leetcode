let nums = [1, 2, 1, 3, 2, 5];

function singleNumber(nums) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    } else {
      map.set(nums[i], i);
    }
  }

  return Array.from(map.keys());
}

console.log(singleNumber(nums));
