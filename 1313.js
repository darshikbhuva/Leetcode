let nums = [1, 1, 2, 3];

function encodedList(nums) {
  let i = 0;
  let res = [];

  while (1) {
    if (!(nums[2 * i] && nums[2 * i + 1])) {
      break;
    } else {
      let temp = [];
      temp.push(nums[2 * i]);
      temp.push(nums[2 * i + 1]);

      for (j = 0; j < nums[2 * i]; j++) {
        res.push(nums[2 * i + 1]);
      }
      i++;
    }
  }

  return res;
}

console.log(encodedList(nums));
