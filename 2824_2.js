const nums = [1, 2, 3, 4, 5];
const target = 6;

function countPairs(nums, target) {
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] < target) {
        count++;
      }
    }
  }

  return count;
}

console.log(countPairs(nums, target)); // Output: 4
