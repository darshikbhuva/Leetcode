let nums = [1, 1, 2, 2];
let n = 2;

function suffleArray(nums, n) {
  let index = n;
  let newArr = [];
  for (i = 0; i < n; i++) {
    newArr.push(nums[i]);
    newArr.push(nums[index]);
    index++;
  }
  return newArr;
}

// let result = new Array(2 * n);
// for (let i = 0; i < n; i++) {
//     result[2 * i] = nums[i];
//     result[2 * i + 1] = nums[i + n];
// }
// return result;

console.log(suffleArray(nums, n));
