let nums = [-2, -1, -1, 1, 2, 3];

function count(nums) {
  let n = nums.length;
  let end = n - 1;
  let negPos = binarySearch(nums, 0, end, -1);
  let posPos = binarySearch(nums, negPos, end, 0);
  let posCount = n - posPos;
  return Math.max(negPos, posCount);

  function binarySearch(nums, start, end, target) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return start;
  }
}

console.log(count(nums));

// TimeComplexity : n*log(n)
