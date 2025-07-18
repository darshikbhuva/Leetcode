let strs = ["1", "01", "001", "0001"];

function maxLength(strs) {
  let result = [];
  for (item of strs) {
    if (isNaN(item)) {
      result.push(item.length);
    } else {
      result.push(Number(item));
    }
  }

  return Math.max(...result);
}

console.log(maxLength(strs));
