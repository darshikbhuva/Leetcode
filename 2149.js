let nums = [3, 1, -2, -5, 2, -4];

function rearrange(nums) {
  let arr1 = [];
  let arr2 = [];
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      arr1.push(nums[i]);
    } else {
      arr2.push(nums[i]);
    }
  }

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    res.push(arr1[i]);
    res.push(arr2[j]);
    i++;
    j++;
  }

  return res;
}

function rearrange(nums) {
  let positive = nums.filter((num) => num >= 0);
  let negative = nums.filter((num) => num < 0);
  let res = [];
  for (let i = 0; i < positive.length; i++) {
    res.push(positive[i]);
    res.push(negative[i]);
  }
  return res;
}

console.log(rearrange(nums));
