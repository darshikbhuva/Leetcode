let nums = [1, 3, 4, 2, 2];

function duplicateNumber(nums) {
  let slow = nums[0];
  let fast = nums[0];

  slow = nums[slow];
  fast = nums[nums[fast]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = nums[0];

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;
}

console.log(duplicateNumber(nums));
