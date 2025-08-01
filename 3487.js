let nums = [-100];

function maxSum(nums) {
  let set = new Set(nums);

  let arr = Array.from(set);

  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  if (sum === 0) {
    sum = Math.max(...arr);
  }

  return sum;
}

console.log(maxSum(nums));
