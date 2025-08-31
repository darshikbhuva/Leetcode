let num = "999777";

function largestGoodInteger(num) {
  let max = "";
  for (let i = 0; i < num.length - 2; i++) {
    if (
      num[i] === num[i + 1] &&
      num[i + 1] === num[i + 2] &&
      num[i] === num[i + 2]
    ) {
      const subString = num[i].repeat(3);

      if (subString > max) {
        max = subString;
      }
    }
  }

  return max;
}

console.log(largestGoodInteger(num));
