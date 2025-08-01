let s = "001";

function maximumOddBinaryNumber(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let ans = "";

  for (let i = 1; i < map.get("1"); i++) {
    ans += "1";
  }

  for (let i = 1; i <= map.get("0"); i++) {
    ans += "0";
  }

  ans += "1";
  return ans;
}

console.log(maximumOddBinaryNumber(s));
