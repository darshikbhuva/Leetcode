let num1 = 2;
let num2 = 3;

function countOperations(num1, num2) {
  let count = 0;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }

    count++;
  }

  return count;
}

console.log(countOperations(num1, num2));
