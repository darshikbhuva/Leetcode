let s = "egg";
let t = "add";

function isomorphic(s, t) {
  const charIndexS = {};
  const charIndexT = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in charIndexS)) {
      charIndexS[s[i]] = i;
    }

    if (!(t[i] in charIndexT)) {
      charIndexT[t[i]] = i;
    }

    if (charIndexS[s[i]] !== charIndexT[t[i]]) {
      return false;
    }
  }

  return true;
}

console.log(isomorphic(s, t));
