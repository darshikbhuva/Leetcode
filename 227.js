let s = "3+2*2";

function calculate(s) {
  let stack = [];
  let sign = null;
  let num = "";

  for (let i = 0; i <= s.length; i++) {
    const curr = s[i];

    if (curr === " ") continue;

    if (!isNaN(curr)) num += curr;

    if (isNaN(curr)) {
      num = Number(num);
      switch (sign) {
        case "+":
        case null:
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / num, 10));
          break;
      }
      sign = curr;
      num = "";
    }
  }

  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
}

console.log(calculate(s));
