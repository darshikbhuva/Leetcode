let order = "cba";
let s = "abcd";

function sortString(order, s) {
  let res = "";
  let map = new Map();

  for (let i = 0; o < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let char of order) {
    if (map.has(char)) {
      res += char.repeat(mp.get(char));
      map.delete(char);
    }
  }

  for (let [ch, count] of map.entries()) {
    res += ch.repeat(count);
  }

  return res;
}

console.log(sortString(order, s));
