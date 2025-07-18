let num = "10133890";

function largestOddString(num) {
  while (num.length >= 0) {
    if (num[num.length - 1] % 2 != 0) {
      return num;
    } else {
      num = num.slice(0, -1);
    }
  }

  return "";
}

console.log(largestOddString(num));
