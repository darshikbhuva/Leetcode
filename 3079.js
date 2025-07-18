let nums = [1, 2, 3];

function encrypted(nums) {
  let sum = 0;

  for (i = 0; i < nums.length; i++) {
    let arr = String(nums[i]).split("");
    let max = Number(Math.max(...arr));

    let newArr = new Array(arr.length).fill(max);
    newArr = Number(newArr.join(""));
    sum += newArr;
  }

  return sum;
}

console.log(encrypted(nums));
