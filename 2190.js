let nums = [2, 2, 2, 2, 3];
let key = 2;

function mostFrequent(nums, key) {
  let map = new Map();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      map.set(nums[i + 1], (map.get(nums[i + 1]) || 0) + 1);
    }
  }
  let res = 0,
    max = 0;
  for (const [target, count] of map) {
    if (count > max) (res = target), (max = count);
  }

  return res;
}

console.log(mostFrequent(nums, key));
