(nums = [1, 0, 0, 1, 0, 1]), (k = 2);
function kLengthApart(nums, k) {
  let lastVisited = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (lastVisited !== null && i - lastVisited - 1 < k) {
        return false;
      } else {
        lastVisited = i;
      }
    }
  }

  return true;
}

console.log(kLengthApart(nums, k));
