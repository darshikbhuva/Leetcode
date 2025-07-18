(nums1 = [1, 1, 3, 2]), (nums2 = [2, 3]), (nums3 = [3]);

function twoOutOfThree(nums1, nums2, nums3) {
  const countMap = new Map();

  const addToMap = (nums) => {
    const uniqueNums = new Set(nums);
    console.log(uniqueNums);

    for (const num of uniqueNums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  };

  addToMap(nums1);
  addToMap(nums2);
  addToMap(nums3);

  const result = [];
  for (const [num, count] of countMap.entries()) {
    if (count >= 2) result.push(num);
  }

  return result;
}

console.log(twoOutOfThree(nums1, nums2, nums3));
