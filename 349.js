let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

function insertion(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  // console.log([set1]);

  const result = [...set1].filter((item) => set2.has(item));

  return result;
}

console.log(insertion(nums1, nums2));
