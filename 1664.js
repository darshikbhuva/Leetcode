let nums = [2, 1, 6, 4];

function waysToMakeFair(nums) {
    let count = 0;
    let skip = 0;

    while (skip < nums.length) {
        if (oddEvenSum(nums, skip)) {
        count++;
        }
        skip++;
    }
    return count;
}

function oddEvenSum(nums, skip) {
  let oddSum = 0;
  let evenSum = 0;
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === skip) {
      continue;
    }

    if (idx % 2 === 0) {
      evenSum += nums[i];
    } else {
      oddSum += nums[i];
    }

    idx++;
  }

  return evenSum === oddSum;
}

console.log(waysToMakeFair(nums));
