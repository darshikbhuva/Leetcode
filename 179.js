let nums = [10, 2];

function largestNumber(nums) {
  const strNums = nums.map(String);

  strNums.sort((a, b) => (b + a).localeCompare(a + b));

  if (strNums[0] === "0") return "0";

  return strNums.join("");
}

console.log(largestNumber(nums));
