let nums1 = [1, 1, 1, 1];
let nums2 = [1, 1, 1, 1];

function findInteger(nums1, nums2) {
  n = nums1.length;

  let sum1 = 0;
  let sum2 = 0;

  for (i = 0; i < nums1.length; i++) {
    sum1 += nums1[i];
    sum2 += nums2[i];
  }

  if (sum1 > sum2) {
    let m = (sum1 - sum2) / n;
    return -m;
  } else {
    let j = (sum2 - sum1) / n;
    return j;
  }
}

console.log(findInteger(nums1, nums2));
