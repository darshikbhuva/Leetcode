let nums = [1, 2, 3, 1];

function findPeakElement(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

console.log(findPeakElement(nums));
