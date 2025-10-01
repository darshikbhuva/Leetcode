let nums = [1, 2, 2];

function minimumPairRemoval(nums) {
  let count = 0;

  while (!isNonDecreasing(nums)) {
    let min = Infinity;
    let index = -1;
    for (let i = 0; i < nums.length - 1; i++) {
      let tempSum = nums[i] + nums[i + 1];

      if (tempSum < min) {
        min = tempSum;
        index = i;
      }
    }

    let newArr = [];

    for (let i = 0; i < index; i++) {
      newArr.push(nums[i]);
    }

    newArr.push(min);

    for (let i = index + 2; i < nums.length; i++) {
      newArr.push(nums[i]);
    }

    nums = newArr;

    count++;
  }

  return count;
}

function isNonDecreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(minimumPairRemoval(nums));
