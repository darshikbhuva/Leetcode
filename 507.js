let num = 6;

function checkPerfectNumber(num) {
  let result = [];
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }


  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }

  return sum === num;
}

console.log(checkPerfectNumber(num));
