nums = [9, 9, 4, 13, 4, 14, 14, 3, 5, 5];

// function distinct(nums) {
//   let count = 0;

//   while (true) {
//     let set = new Set(nums);
//     if (nums.length === set.size) return count;

//     if (nums.length <= 3) {
//       count++;
//       break;
//     }

//     nums.shift();
//     nums.shift();
//     nums.shift();
//     count++;
//   }

//   return count;
// }

function distinct(nums) {
  let operations = 0;

  while (true) {
    const seen = new Set();
    let hasDuplicate = false;

    for (let num of nums) {
      if (seen.has(num)) {
        hasDuplicate = true;
        break;
      }
      seen.add(num);
    }

    if (!hasDuplicate) break;

    nums.splice(0, 3);
    operations++;
  }

  return operations;
}

console.log(distinct(nums));
