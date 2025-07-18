let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];

function nextGreaterElement(nums1, nums2) {
  let stack = [];
  let map = {};
  let n = nums2.length;

  stack.push(nums2[n - 1]);
  map[nums2[n - 1]] = -1;

  for (i = n - 2; i >= 0; i--) {
    while (stack.length) {
      if (nums2[i] > stack[stack.length - 1]) {
        stack.pop();
      } else {
        map[nums2[i]] = stack[stack.length - 1];
        break;
      }
    }
    if (stack.length === 0) {
      map[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }

  return nums1.map((x) => map[x]);
}

console.log(nextGreaterElement(nums1, nums2));
