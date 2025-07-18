let nums1 = [1, 2, 3, 3];
let nums2 = [1, 1, 2, 2];

function diffArray(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let arr1 = [];
  let arr2 = [];

  for (let val of set1) {
    if (!set2.has(val)) {
      arr1.push(val);
    }
  }

  for (let val of set2) {
    if (!set1.has(val)) {
      arr2.push(val);
    }
  }

  return [arr1, arr2];
}

console.log(diffArray(nums1, nums2));
