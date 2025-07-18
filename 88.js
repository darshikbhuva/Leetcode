let num1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let num2 = [2, 5, 6];
let n = 3;

function merge(num1, m, num2, n) {
  let num1Copy = num1.slice(0, m);
  let numIndex1 = 0;
  let numIndex2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (
      numIndex2 >= n ||
      (numIndex1 < m && num1Copy[numIndex1] < num2[numIndex2])
    ) {
      num1[i] = num1Copy[numIndex1];
      numIndex1++;
    } else {
      num1[i] = num2[numIndex2];
      numIndex2++;
    }
  }

  return num1;
}

console.log(merge(num1, m, num2, n));
