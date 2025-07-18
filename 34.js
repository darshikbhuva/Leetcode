function searchRange(nums, target) {
  function findPosition(isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return index;
  }

  const start = findPosition(true);
  const end = findPosition(false);

  return [start, end];
}
