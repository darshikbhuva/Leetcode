let nums = [1, 2, 3, 0];

function increasingArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = [...nums];
    temp.splice(i, 1);

    let isIncreasing = true;

    for (let j = 1; j < temp.length; j++) {
      if (temp[j] <= temp[j - 1]) {
        isIncreasing = false;
        break;
      }
    }

    if (isIncreasing) {
      return true;
    }
  }

  return false;
}

console.log(increasingArray(nums));
