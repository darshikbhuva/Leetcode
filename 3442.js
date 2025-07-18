let s = "abcabcab";

function freDiff(s) {
  let map = new Map();
  let odd = [];
  let even = [];

  for (i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  map.forEach((index, value) => {
    if (index % 2 === 0) {
      even.push(index);
    } else {
      odd.push(index);
    }
  });

  let min = Math.min(...even);
  let max = Math.max(...odd);

  return max - min;
}
console.log(freDiff(s));
