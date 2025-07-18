let nums1 = [0, 7, 28, 17, 18];
let nums2 = [1, 2, 6, 26, 1, 0, 27, 3, 0, 30];

// 98

function replace(nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let count1 = 0;
  let count2 = 0;
  let sum1 = 0;
  let sum2 = 0;

  for (i = 0; i < n1; i++) {
    if (nums1[i] === 0) {
      count1++;
      sum1 += 1;
    }
    sum1 += nums1[i];
  }

  for (i = 0; i < n2; i++) {
    if (nums2[i] === 0) {
      count2++;
      sum2 += 1;
    }
    sum2 += nums2[i];
  }

  if (sum1 < sum2 && count1 === 0) {
    return -1;
  }

  if (sum2 < sum1 && count2 === 0) {
    return -1;
  }

  return Math.max(sum2, sum1);
}

console.log(replace(nums1, nums2));
