let s1 = "this apple is sweet";
let s2 = "this apple is sour";

function uncommon(s1, s2) {
  let s = s1 + " " + s2;
  s = s.split(" ");
  let map = new Map();

  for (i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  let res = [];

  map.forEach((value, index) => {
    if (value === 1) {
      res.push(index);
    }
  });

  return res;
}

console.log(uncommon(s1, s2));
