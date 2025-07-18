function operation(s) {
  let nums = Array.from(s, Number);

  while (nums.length > 2) {
    let temp = [];
    for (let i = 0; i < nums.length - 1; i++) {
      temp.push((nums[i] + nums[i + 1]) % 10);
    }
    nums = temp;
  }

  return nums[0] === nums[1];
}

console.log(operation("34789"));
