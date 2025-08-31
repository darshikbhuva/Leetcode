let nums = [1, 2, 3, 4];

function findMatrix(nums) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let max = Math.max(...[...map.values()]);

  for (let i = 0; i < max; i++) {
    let tempSet = new Set();
    for (let j = 0; j < nums.length; j++) {
      if (map.get(nums[j]) && !tempSet.has(nums[j])) {
        tempSet.add(nums[j]);
        map.set(nums[j], map.get(nums[j]) - 1);
      }
    }
    result.push(Array.from(tempSet));
  }

  return result;
}

console.log(findMatrix(nums));
