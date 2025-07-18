let s = "abcdefg";
let k = 2;

function reverseString(s, k) {
  s = s.split("");

  for (i = 0; i < s.length; i += 2 * k) {
    let n = k;
    let mid = Math.floor(n / 2);

    for (j = 0; j < mid; j++) {
      let temp = s[i + j];
      s[i + j] = s[i + n - 1 - j];
      s[i + n - 1 - j] = temp;
    }
  }

  return s.join("");
}

console.log(reverseString(s, k));
