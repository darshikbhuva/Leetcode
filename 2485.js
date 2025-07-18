let n = 8;

function sum(n) {
  let i = 1;

  while (i <= n) {
    let sum1 = 0;
    let sum2 = 0;
    for (j = 1; j <= i; j++) {
      sum1 += j;
    }

    for (k = i; k <= n; k++) {
      sum2 += k;
    }

    console.log(sum1);
    console.log(sum2);

    if (sum1 === sum2) {
      return i;
    }
    i++;
  }

  return -1;
}

// function pivotInteger(n) {
//     const totalSum = (n * (n + 1)) / 2;

//     for (let x = 1; x <= n; x++) {
//         const leftSum = (x * (x + 1)) / 2;
//         const rightSum = totalSum - ((x - 1) * x) / 2;
//         if (leftSum === rightSum) {
//             return x;
//         }
//     }

//     return -1;
// }

console.log(sum(n));
