let nums1 = [5, 4, 3, 2, 1];

function nextGreaterElements(nums1) {
  let nums2 = [...nums1, ...nums1];
  let n = nums2.length;

  let stack = [];
  let ans = Array(n).fill(-1);

  stack.push(nums2[n - 1]);

  for (i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (nums2[i] >= top) {
        stack.pop();
      } else {
        ans[i] = top;
        break;
      }
    }
    stack.push(nums2[i]);
  }

  return ans.slice(0, n / 2);
}

console.log(nextGreaterElements(nums1));
