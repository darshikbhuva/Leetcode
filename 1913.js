let nums = [4, 2, 5, 9, 7, 4, 8];

// function proDiff(nums){
//     nums=nums.sort((a,b)=>a-b)

//     let min1=nums[0]
//     let min2=nums[1]
//     let max1=nums[nums.length-1]
//     let max2=nums[nums.length-2]

//     return ((max1*max2)-(min1*min2))

// }

function proDiff(nums) {
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > max2) {
      max1 = max2;
      max2 = nums[i];
    } else if (nums[i] > max1) {
      max1 = nums[i];
    }

    if (nums[i] < min2) {
      min1 = min2;
      min2 = nums[i];
    } else if (nums[i] < min1) {
      min1 = nums[i];
    }
  }

  console.log(min1, min2, max1, max2);

  return max1 * max2 - min1 * min2;
}

console.log(proDiff(nums));
