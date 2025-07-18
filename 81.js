let nums = [2, 5, 6, 0, 0, 1, 2];
let target = 3;

function searchRotate(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[start] === nums[mid] && nums[end] === nums[mid]) {
      start++;
      end--;
    } else if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return false;
}

console.log(searchRotate(nums, target));
