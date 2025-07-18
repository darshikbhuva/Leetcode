let nums = [5];
let target = 5;

function binarySearch(nums, target) {
  let end = nums.length - 1;
  let start = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch(nums, target));
