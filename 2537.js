let nums = [3, 1, 4, 3, 2, 2, 4];
let k = 2;

function goodSubArray(nums, k) {
  let f = 0;
  let count = 0;

  while (f < nums.length - 1) {
    let i = f;
    let j = f + 1;
    temp = 0;
    if (i < j && nums[i] === nums[j]) {
      temp++;
    }

    if (temp >= k) {
      count++;
      f++;
    }

    i++;
    j++;

    if (j === nums.length - 1) {
      f++;
    }
  }

  return count;
}

console.log(goodSubArray(nums, k));
