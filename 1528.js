let s = "abc";
let indices = [2, 0, 1];

function shuffleString(s, indices) {
  let shuffled = new Array(s.length);

  for (let i = 0; i < indices.length; i++) {
    shuffled[indices[i]] = s[i];
  }

  return shuffled.join("");
}

console.log(shuffleString(s, indices));
