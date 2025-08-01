let nums = [0];

function smallestSubarrays(nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    let maxOR = 0;
    tempOR = 0;

    for (let k = i; k < nums.length; k++) {
      maxOR |= nums[k];
    }

    if (nums[i] === maxOR) {
      ans.push(1);
      continue;
    }

    let j = i;

    while (tempOR != maxOR && j < nums.length) {
      tempOR |= nums[j];
      j++;
    }
    ans.push(j - i);
  }

  return ans;
}

console.log(smallestSubarrays(nums));
