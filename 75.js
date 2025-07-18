let nums = [2, 0, 2, 1, 1, 0];

// function sort(nums) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         temp = nums[j];
//         nums[j] = nums[i];
//         nums[i] = temp;
//       }
//     }
//   }

// }

function sort(nums) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count0++;
    } else if (nums[i] == 1) {
      count1++;
    } else {
      count2++;
    }
  }
  let k = 0;
  for (let i = 0; i < count0; i++) {
    nums[k++] = 0;
  }
  for (let i = 0; i < count1; i++) {
    nums[k++] = 1;
  }
  for (let i = 0; i < count2; i++) {
    nums[k++] = 2;
  }
}

console.log(sort(nums));
