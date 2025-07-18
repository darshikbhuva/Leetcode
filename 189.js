let nums = [-1];
let k = 2;

function rotate(nums, k) {
  let n = nums.length;
  k = k % n;
  if (nums.length)
    function reverse(start, end) {
      while (start <= end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
      }
    }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
}
console.log(rotate(nums, k));
