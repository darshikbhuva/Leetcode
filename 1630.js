let nums = [4, 6, 5, 9, 3, 7];
let l = [0, 0, 2];
let r = [2, 3, 5];

function checkArithmeticSubarrays(nums, l, r) {
  let result = [];

  for (let i = 0; i < l.length; i++) {
    let temp = [];

    for (let j = l[i]; j <= r[i]; j++) {
      temp.push(nums[j]);
    }
    temp = temp.sort((a, b) => a - b);

    let diff = temp[1] - temp[0];
    let flag = false;

    for (let k = 1; k < temp.length; k++) {
      if (temp[k] - temp[k - 1] != diff) {
        result.push(false);
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(true);
    }
  }

  return result;
}

console.log(checkArithmeticSubarrays(nums, l, r));
