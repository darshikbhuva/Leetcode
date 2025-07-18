let s = "aaabb";

function count(s) {
  let map = new Map();

  for (i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let arr = Array.from(map.values());

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(count(s));
