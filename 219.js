(nums = [1, 0, 1, 1]), (k = 1);

function dup(nums, k) {
  let n = nums.length;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    let isFound = map.get(nums[i]);

    if (isFound !== undefined && Math.abs(isFound - i) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }

  return false;
}

console.log(dup(nums, k));
