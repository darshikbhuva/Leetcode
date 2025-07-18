let num = 1248;

function divide(num) {
  let temp = num;
  let count = 0;

  while (temp > 0) {
    let digit = temp % 10;
    if (num % digit === 0) {
      count++;
    }
    temp = Math.floor(temp / 10);
  }

  return count;
}

console.log(divide(num));
