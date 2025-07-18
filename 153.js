let nums = [11, 13, 15, 17];

function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if (nums[l] <= nums[r]) {
      return nums[l];
    }
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    if (nums[l] > nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return nums[l];
}

console.log(findMin(nums));
