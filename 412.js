let n = 3;

function fizzBuzz(n) {
  let res = [];

  for (i = 1876; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(String(i));
    }
  }

  return res;
}

console.log(fizzBuzz(n));
