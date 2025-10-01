let nums = [0, 2, 3, 4, 6, 8, 9];

function summaryRanges(nums) {
  if (nums.length === 0) return [];
  let i = 0;
  let count = nums[0];
  let start = nums[0];
  let res = [];

  while (i < nums.length) {
    if (nums[i] === count) {
      count++;
      i++;
    } else {
      if (start != count - 1) {
        res.push(`${start}->${count - 1}`);
      } else {
        res.push(`${start}`);
      }

      start = nums[i];
      count = nums[i];
    }
  }

  if (start != count - 1) {
    res.push(`${start}->${count - 1}`);
  } else {
    res.push(`${start}`);
  }

  return res;
}

console.log(summaryRanges(nums));
