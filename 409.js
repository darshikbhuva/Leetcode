let s = "abccccdd";

function longestPalindrome(s) {
  let visit = new Set();
  let res = 0;

  for (let c of s) {
    if (visit.has(c)) {
      visit.delete(c);
      res += 2;
    } else {
      visit.add(c);
    }
  }

  if (visit.size) res += 1;
  return res;
}

console.log(longestPalindrome(s));
