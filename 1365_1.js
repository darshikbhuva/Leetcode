let nums = [0, 1, 2, 3];

function minimumNumber(nums) {
  let arr = [];
  let count;

  for (i = 0; i < nums.length; i++) {
    count = 0;
    for (j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    arr.push(count);
  }

  return arr;
}

console.log(minimumNumber(nums));
