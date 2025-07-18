let pref = [5, 2, 0, 3, 1];

function prefArray(pref) {
  let xor = 0;
  for (let i = 0; i < pref.length; i++) {
    xor ^= pref[i];
    pref[i] = xor;
  }
  return pref;
}

console.log(prefArray(pref));
