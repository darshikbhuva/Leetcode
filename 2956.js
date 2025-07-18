let nums1 = [2, 3, 2];
let nums2 = [1, 2];

function countCommonIndices(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  let answer1 = 0;
  let answer2 = 0;

  for (const num of nums1) {
    if (set2.has(num)) {
      answer1++;
    }
  }

  for (const num of nums2) {
    if (set1.has(num)) {
      answer2++;
    }
  }

  return [answer1, answer2];
}

console.log(comman(nums1, nums2));
