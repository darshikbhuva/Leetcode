let nums = [2, 1, -1];

function findPivotIndex(nums) {
  let pivot = 0;

  while (pivot < nums.length) {
    let sum1 = 0;
    let sum2 = 0;

    for (i = 0; i < pivot; i++) {
      sum1 += nums[i];
    }

    for (i = pivot + 1; i < nums.length; i++) {
      sum2 += nums[i];
    }

    if (sum1 === sum2) {
      return pivot;
    } else {
      pivot++;
    }
  }

  return -1;
}

console.log(findPivotIndex(nums));
