let nums = [8, 2, 3, 4, 6];
let k = 2;

function missingMultiple(nums, k) {
  let set = new Set(nums);
  let mulK = 0;

  let i = 0;

  while (i <= nums.length) {
    mulK += k;
    if (!set.has(mulK)) {
      return mulK;
    }
    i++;
  }

  return mulK;
}

console.log(missingMultiple(nums, k));
