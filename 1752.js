let nums = [3, 4, 5, 1, 2];

function check(nums) {
  const n = nums.length;
  let sorted = [];

  for (let i = 0; i <= n; i++) {
    let index = 0;
    let j;
    for (j = i; j < n; j++) {
      sorted[index] = nums[j];
      index++;
    }

    for (let k = 0; k < i; k++) {
      sorted[index] = nums[k];
      index++;
    }

    let flag = true;

    for (let p = 0; p < n - 1; p++) {
      if (sorted[p + 1] < sorted[p]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      return true;
    }
  }

  return false;
}

function check2(nums) {
  let n = nums.length;

  let peak = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      peak++;
    }
  }

  return peak <= 1;
}

console.log(check(nums));
