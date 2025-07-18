let nums = [2, 3, 5, 9];
let k = 2;

function houseRobber(nums, k) {
  let start = Math.min(...nums);
  let end = Math.max(...nums);
  let ans = 0;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (isRobberyPossible(mid, nums, k)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  function isRobberyPossible(mid, nums, k) {
    let houseRobbed = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        houseRobbed++;
        i++;
      }

      if (houseRobbed >= k) return true;
    }

    return false;
  }

  return ans;
}

console.log(houseRobber(nums, k));
