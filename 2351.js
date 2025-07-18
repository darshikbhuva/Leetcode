let s = "abcdd";

function twice(s) {
  let map = new Map();
  let ans = "";

  for (i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);

    if (map.get(s[i]) === 2) {
      ans = s[i];
      break;
    }
  }

  return ans;
}

console.log(twice(s));
