let s = "abc";

function product(s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const charValue = 26 - (s.charCodeAt(i) - 97);
    sum += charValue * (i + 1);
  }

  return sum;
}

console.log(product(s));
