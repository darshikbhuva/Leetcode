let nums = [1, 3, 1, 2, 2];

function countCompleteSubarrays(nums) {
  const totalUnique = new Set(nums).size;
  const freq = new Map();
  let left = 0,
    ans = 0;

  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

    while (freq.size === totalUnique) {
      ans += nums.length - right;
      freq.set(nums[left], freq.get(nums[left]) - 1);
      if (freq.get(nums[left]) === 0) {
        freq.delete(nums[left]);
      }
      left++;
    }
  }

  return ans;
}

console.log(countCompleteSubarrays(nums));
