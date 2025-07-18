let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];


function singleNonDuplicate(nums) {
  let l = 0;
  let r = nums.length - 1;

  if (l === r) {
    return nums[l];
  }

  while (l < r - 1) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
      return nums[mid];
    }

    if (nums[mid] === nums[mid - 1]) {
      let pairStart = mid - 1;
      if (pairStart % 2 === 0) {
        l = mid + 1;
      } else {
        r = pairStart - 1;
      }
    } else {
      let pairStart = mid;
      if (pairStart % 2 === 0) {
        l = mid + 2;
      } else {
        r = mid - 1;
      }
    }
  }
}

console.log(singleNonDuplicate(nums));
