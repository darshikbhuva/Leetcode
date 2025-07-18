let nums = [-6, 2, 5, -2, -7, -1, 3];
let target = -2;

//10

function countPair(nums, target) {
  let count = 0;

  nums = nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;

  while (l != r) {
    if (nums[l] + nums[r] < target) {
      count = count + (r - l);
      l++;
    } else {
      r--;
    }
  }

  return count;
}

console.log(countPair(nums, target));
