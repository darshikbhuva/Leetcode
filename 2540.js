let nums1 = [2, 4];
let nums2 = [1, 2];

function getCommon(nums1, nums2) {
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return -1;
}

console.log(digitsNum(nums1, nums2));
