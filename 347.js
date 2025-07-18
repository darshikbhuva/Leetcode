let nums = [3, 0, 1, 0];
let k = 1;

function count(nums, k) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  let arr = Array.from(sortedMap.keys());

  let ans = [];

  for (i = 0; i < k; i++) {
    ans.push(arr[i]);
  }

  return ans;
}

console.log(count(nums, k));
