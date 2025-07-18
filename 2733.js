let nums = [2, 4, 25];

// function mid(nums) {
//   if (nums.length <= 2) {
//     return -1;
//   }

//   let max = Math.max(...nums);
//   let maxIndex = nums.indexOf(max);

//   nums.splice(maxIndex, 1);

//   let min = Math.min(...nums);
//   let minIndex = nums.indexOf(min);

//   nums.splice(minIndex, 1);

//   return nums[0];
// }

// Approch 2

function mid(nums) {
  if (nums.length < 3) return -1;

  let min = nums[0];
  let max = nums[0];

  for (let num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  for (let num of nums) {
    if (num !== min && num !== max) return num;
  }

  return -1;
}

console.log(mid(nums));
