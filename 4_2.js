let num1 = [2, 2, 5, 6, 7, 8, 9];
let num2 = [];

function median(num1, num2) {
  let num3 = [];
  let d1 = 0;
  let d2 = 0;
  let d3 = 0;

  while (d1 < num1.length && d2 < num2.length) {
    if (num1[d1] > num2[d2]) {
      num3[d3] = num2[d2];
      d2++;
    } else {
      num3[d3] = num1[d1];
      d1++;
    }

    d3++;
  }

  while (d1 < num1.length) {
    num3[d3] = num1[d1];
    d1++;
    d3++;
  }

  while (d2 < num2.length) {
    num3[d3] = num2[d2];
    d2++;
    d3++;
  }

  console.log(num3);

  let m = num3.length;
  if (m % 2 === 0) {
    ans = (num3[m / 2 - 1] + num3[m / 2 + 1 - 1]) / 2;
    return ans;
  } else {
    ans = num3[parseInt((m + 1) / 2) - 1];

    return ans;
  }
}

console.log(median(num1, num2));

// Time-complexity:  O(log(m+n))
