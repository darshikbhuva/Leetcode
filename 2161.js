let nums = [4, 5, 6, 5, 7, 5, 3];
let pivot = 5;

function partition(nums, pivot) {
  let less = [],
    equal = [],
    greater = [];

  for (let num of nums) {
    if (num < pivot) less.push(num);
    else if (num === pivot) equal.push(num);
    else greater.push(num);
  }

  return [...less, ...equal, ...greater];
}

console.log(partition(nums, pivot));
