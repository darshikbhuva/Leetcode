let nums = [7, 8, 6, 9];

function findMissingElements(nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const ans = [];

  for (let num = min; num < max; num++) {
    if (!nums.includes(num)) {
      ans.push(num);
    }
  }
  return ans;
}

console.log(findMissingElements(nums));
