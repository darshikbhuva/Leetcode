(nums = [3, 2, 1, 5, 4]), (k = 2);

function absDiff(nums) {
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }

  return count;

  // approach 2

  // let count = 0;
  // let map = new Map();

  // for (let num of nums) {
  // if (map.has(num - k)) count += map.get(num - k);
  // if (map.has(num + k)) count += map.get(num + k);

  // map.set(num, (map.get(num) || 0) + 1);
  // }
  // return count;
}

console.log(absDiff(nums));
