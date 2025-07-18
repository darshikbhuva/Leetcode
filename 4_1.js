let num1 = [4, 19, 77, 25, 22, 24, 92, 82, 40, 24, 14, 12, 70, 23, 56];
let num2 = [];

function median(num1, num2) {
  num1 = [...num1, ...num2];

  let ans;
  num1 = num1.sort((a, b) => a - b);
  console.log(num1);

  let m = num1.length;
  if (m % 2 === 0) {
    ans = (num1[m / 2 - 1] + num1[m / 2 + 1 - 1]) / 2;
    return ans;
  } else {
    ans = num1[parseInt((m + 1) / 2) - 1];
    //  console.log(ans)

    return ans;
  }
}

console.log(median(num1, num2));

// Time Complexity : O((m+n)log(m+n))
