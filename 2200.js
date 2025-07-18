(nums = [2, 2, 2, 2, 2]), (key = 2), (k = 2);

function kDistantArray(nums, key, k) {
  let arr = [];

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      arr.push(i);
    }
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Math.abs(i - arr[j]) <= k) {
        result.push(i);
        break;
      }
    }
  }

  return result;
}

console.log(kDistantArray(nums, key, k));
