let nums1 = [
  [2, 4],
  [3, 6],
  [5, 5],
];
let nums2 = [
  [1, 3],
  [4, 3],
];

function merge2DArray(nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let nums3 = [];
  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (nums1[i][0] === nums2[j][0]) {
      nums3.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i++;
      j++;
    } else if (nums1[i][0] > nums2[j][0]) {
      nums3.push(nums2[j]);
      j++;
    } else {
      nums3.push(nums1[i]);
      i++;
    }
  }

  while (i < n1) {
    nums3.push(nums1[i]);
    i++;
  }

  while (j < n2) {
    nums3.push(nums2[j]);
    j++;
  }

  return nums3;
}

console.log(merge2DArray(nums1, nums2));
