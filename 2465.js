let nums = [4, 1, 4, 0, 3, 5];

function distinct(nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);

  while (nums.length > 0) {
    let min = nums[0];
    let max = nums[nums.length - 1];

    let avg = (min + max) / 2;

    result.push(avg);

    nums.splice(0, 1);
    nums.splice(nums.length - 1, 1);
  }

  let set = new Set(result);
  return set.size;
}

console.log(distinct(nums));
