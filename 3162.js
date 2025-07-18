let nums1 = [1, 2, 4, 12];
let nums2 = [2, 4];
let k = 3;

function goodPair(nums1, nums2, k) {
  let count = 0;

  for (i = 0; i < nums1.length; i++) {
    for (j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        console.log(i, j);
        count++;
      }
    }
  }

  return count;
}

console.log(goodPair(nums1, nums2, k));
