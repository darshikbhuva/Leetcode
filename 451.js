let s = "Aabb";

function count(s) {
  let map = new Map();

  for (i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  const sortedByValueAsc = new Map(
    [...map.entries()].sort((a, b) => b[1] - a[1])
  );

  let ans = "";

  sortedByValueAsc.forEach((index, value) => {
    if (index > 1) {
      for (i = 1; i <= index; i++) {
        ans += value;
      }
    } else {
      ans += value;
    }
  });

  return ans;
}

console.log(count(s));
