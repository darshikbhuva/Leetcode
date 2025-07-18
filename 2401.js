let nums = [1, 3, 8, 48, 10];

function niceSubArray(nums) {
  let start = 0;
  let maxLen = 0;
  let bitMask = 0;
  let n = nums.length;

  for (let end = 0; end < n; end++) {
    //shrinking
    while ((bitMask & nums[end]) != 0) {
      bitMask = bitMask ^ nums[start];
      start++;
    }
    bitMask = bitMask | nums[end];
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

console.log(niceSubArray(nums));
