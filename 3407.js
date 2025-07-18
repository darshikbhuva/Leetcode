let s = "leetcode";
let p = "ee*e";

function pattern(s, p) {
  let i = 0;
  let j = 0;

  while (i < s.length) {
    if (p[j] === "*") {
      j++;
      i++;
    }
    if (s[i] != p[j]) {
      i++;
    } else {
      i++;
      j++;
    }
  }
}

console.log(pattern(s, p));
