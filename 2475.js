let nums = [4, 4, 2, 4, 3];

function unequalTriplets(nums) {
  let i = 0;
  let j = 1;
  let k = 2;
  let count = 0;

  while (i < nums.length - 2) {
    if (hasTriplate(nums[i], nums[j], nums[k])) {
      count++;
    }

    if (k < nums.length - 1) {
      k++;
    } else if (j < nums.length - 2) {
      j++;
      k = j + 1;
    } else {
      i++;
      j = i + 1;
      k = j + 1;
    }
  }

  return count;
}

function hasTriplate(n1, n2, n3) {
  if (n1 != n2 && n2 != n3 && n1 != n3) {
    return true;
  }

  return false;
}

console.log(unequalTriplets(nums));
