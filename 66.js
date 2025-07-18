let data = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

function plusOne(data) {
  let k = 1;
  let arr = [];

  for (i = data.length - 1; i >= 0; i--) {
    let sum = data[i] + k;
    arr.unshift(sum % 10);
    k = Math.floor(sum / 10);
  }

  if (k > 0) {
    arr.unshift(k);
  }

  return arr;
}

console.log(plusOne(data));
