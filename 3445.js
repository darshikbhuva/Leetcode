(s = "1122211"), (k = 3);

function diff(s, k) {
  s = s.split("");
  let a = [];
  let b = [];

  let map = new Map();

  for (i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  map.forEach((value, index) => {
    if (Number(value) % 2 === 0) {
      b.push(value);
    } else {
      a.push(value);
    }
  });

  let max = Math.max(...a);
  let min = Math.min(...b);

  return max - min;
}

console.log(diff(s, k));
