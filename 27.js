let nums = [3, 2, 2, 3];
let val = 3;

function sorting(nums, val) {
  let x = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }

  return x;
}

console.log(sorting(nums, val));
