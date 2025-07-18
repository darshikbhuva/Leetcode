let num = 123;

function zero(num) {
  let step = 0;

  while (num !== 0) {
    num % 2 === 0 ? (num /= 2) : num--;
    step++;
  }
  return step;
}

console.log(zero(num));
