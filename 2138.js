let s = "ctoyjrwtngqwt";
let k = 8;
let fill = "n";

function partition(s, k, fill) {
  let res = [];
  for (i = 0; i < s.length; i += k) {
    let temp = s.slice(i, i + k);
    if (temp.length < k) {
      let rem = k - temp.length;
      for (let i = 0; i < rem; i++) {
        temp += fill;
      }
    }
    res.push(temp);
  }

  return res;
}

console.log(partition(s, k, fill));
